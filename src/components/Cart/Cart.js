import React, { useState } from 'react';
import SelectedItem from '../SelectedItem/SelectedItem';
import OneCartRandom from '../OneCartRandom/OneCartRandom';
import './Cart.css';



const Cart = ({cart,chooseAgain}) => {
   const [items,setItems]=useState([0]);
   const [oneGenerateCart,setOneGenerateCart]=useState([]);
    
    const handleDeleteItem=(deletingItems)=>{
        const newItems=items.filter((item=>item !== deletingItems));
        setItems(newItems);
        cart.splice(newItems,1);
    }
 const handleChooseOne=()=>{
    if(cart.length){
    const randomIndex= Math.floor(Math.random() * cart.length);
    const randomCarts =[cart[randomIndex]];
    setOneGenerateCart(randomCarts);
    console.log('choose');
 }
 else{
    setOneGenerateCart([]);

 }
}
    // const chooseAgain=()=>{
    //     let chooseCart=[];
    //     setCart(chooseCart);
    //     const newLists=lists.filter(list=>list.id!==id)
    //    }
   
return (
        <div className='cart'>
           <div>
            <h2>Selected Product:</h2>
            {
                cart.map(item=> <SelectedItem
                    key={item.id}
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                ></SelectedItem>)
            }
            {
              oneGenerateCart.map(oneCart => <OneCartRandom 
                key={oneCart.id} 
                oneCart={oneCart}
                ></OneCartRandom>)
            }
           <button className='random-choose-btn' onClick={handleChooseOne}>Choose Best 1</button><br/>
    <button className='choose-again-btn' onClick={chooseAgain}>Choose Again</button>
            </div> 
        </div>
    );
};

export default Cart;