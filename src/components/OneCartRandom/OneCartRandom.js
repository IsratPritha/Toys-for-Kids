import React from 'react';
import './OneCartRandom.css';

const OneCartRandom = (props) => {
    const {name,img}=props.oneCart;
    return (
        <div className='one-cart'>
            <img src={img} alt=""></img>
           <p className='name-design'> {name}</p>

        </div>
    );
};

export default OneCartRandom;