import React from 'react'

const ItemCard = ({ item }) => {
    return(
        <div className="item-card">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Purpose: {item.purpose}</p>
        </div>
    )
}

export default ItemCard;