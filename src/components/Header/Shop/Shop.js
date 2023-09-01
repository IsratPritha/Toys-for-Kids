import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]=useState([]);
   
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart=(product)=>{
      if(cart.length<4){
        console.log(product);
        const newCart =[...cart,product];
        setCart(newCart);
      }
      else{
        alert("you can't select more than four product" )
     }
     }
     const chooseAgain=()=>{
      let chooseCart=[];
      setCart(chooseCart);
     }
    
    return (
        <div className='shop-container'>
          <div className="products-container">
             {
                products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}

                >       </Product>)
             }      
          </div>
          <div className="cart-container">
            {/* <h4>Order</h4>
          <p>Selected Toys:{cart.length}</p> */}
          <Cart
          cart={cart}
          chooseAgain={chooseAgain}
          ></Cart>
            
           
          </div>
        </div>
    );
};

export default Shop;