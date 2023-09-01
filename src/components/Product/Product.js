import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const{name,price,img,stock}=props.product;
    
    // console.log(name);
    return (
        <div className='product'>
          <img src={img} alt="" /> 
          <div className='product-info'>
          <p className='product-name'>Name:{name}</p>
          <p>Price:${price}</p>
          <p>Stock:{stock}</p>
          </div>
          <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='add-btn'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
         

        </div>
    );
};

export default Product;