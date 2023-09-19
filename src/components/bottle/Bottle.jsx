import PropTypes from 'prop-types'; 

import './Bottle.css' 

const Bottle = ({bottleData, handleAddToCart}) => {
    // console.log(bottleData)

    const { img, name, price}= bottleData;

    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h5> Name: {name} </h5>
            <p>Price: ${price} </p>
            <button onClick={()=>handleAddToCart(bottleData)} >Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottleData: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default Bottle;