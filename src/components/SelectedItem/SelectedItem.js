import React from 'react';
import './SelectedItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedItem = (props) => {
    const {item,handleDeleteItem}=props;
   const {name,img}=item;
   
    return (
        <div className='selected-item'>
            <img  src={img} alt="" />
            <h2 className='name-title'>{name}</h2>
           
            <FontAwesomeIcon onClick={()=>handleDeleteItem(item)}icon={faTrash}></FontAwesomeIcon>
        
            
        </div>
    );
};

export default SelectedItem;