import PropTypes from 'prop-types'; // its for warning code
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h5>Your Cart: {cart.length} </h5>

            <div className='cart-container'>

                {
                    cart.map(bottle =>
                        <div key={bottle.id} className='alignment'>
                            <img src={bottle.img} ></img>
                            <button className='btn-bg' onClick={()=>handleRemoveFromCart(bottle.id)} >Remove</button>
                        </div>)
                }

            </div>
        </div>
    );
};

// its for warning code
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;