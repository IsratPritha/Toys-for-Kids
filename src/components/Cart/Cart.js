import React from 'react';
import SelectedItem from '../SelectedItem/SelectedItem';

const Cart = ({cart,chooseAgain}) => {
    
    return (
        <div>
           <div>
            <h2>Selected Product:</h2>
            {
                cart.map(item=> <SelectedItem
                key={item.id}
                    item={item} 
                ></SelectedItem>)
            }
            <button onClick={chooseAgain}>Choose Again</button>
            </div> 
        </div>
    );
};

export default Cart;