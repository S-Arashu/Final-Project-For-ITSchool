import React from 'react'

export default function Item(props) {
    return (
        <div key={props.item.id} className='item'>
            <img src={props.item.img[0]} onClick={() => props.onShowItem(props.item)} />
            <h2>{props.item.name}</h2>
            <p className='text-description'>{props.item.description}</p>
            <div className='price'><b>{props.item.price} руб.</b>
            <div className='addToCart' onClick={() => props.onAdd(props.item)}>+</div>
            </div>
        </div>
    )
}
