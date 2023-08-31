import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name,price,img,stock}=props.product;
    const {handleAddToCart}= props;
    console.log(props.product);
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
          </button>
         

        </div>
    );
};

export default Product;