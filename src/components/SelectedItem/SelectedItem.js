import React from 'react';
import './SelectedItem.css';

const SelectedItem = (props) => {
    const {name,img}=props.item;
    return (
        <div className='selected-item'>
            <img  src={img} alt="" />
            <h2 className='name-title'>{name}</h2>
        </div>
    );
};

export default SelectedItem;