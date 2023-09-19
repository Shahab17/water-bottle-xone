import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFormLS } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    // load cart from the local storage
    useEffect(() => {
        // console.log('called the useEffect',bottles.length)
        if (bottles.length > 0) {
            const storedCartId = getStoredCart();
            console.log(storedCartId, bottles)

            const savedCart = [];
            for(const id of storedCartId){
                console.log(id)
                const bottleId = bottles.find(bottle => bottle.id === id);
                if(bottleId){
                    savedCart.push(bottleId)
                }
            }
            console.log('saved cart', savedCart)
            setCart(savedCart);
        }
    }, [bottles])


    const handleAddToCart = bottle => {
        // console.log(bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        // visually remove from cart
        const remainingCart = cart.filter( bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFormLS(id);
    }

    return (
        <div>
            <h4> {bottles.length} Bottles Available </h4>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottleData={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;