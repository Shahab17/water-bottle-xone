const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveToCartLS = cart=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveToCartLS(cart)
}

const removeFormLS = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter( idx => idx !== id);
    saveToCartLS(remaining)
}

export {addToLS, getStoredCart, removeFormLS}