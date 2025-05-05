import React from "react";
import ItemCard from './ItemCard'
import ItemAction from './ItemAction'

const InventoryDisplay = ({ inventory, onDeleteItem}) => {
    return(
        <div>
            <h1>Inventory</h1>
            {inventory.map((item, index) => (
            <div key={item.id} className="inventory-item">
                <ItemCard item={item}/>
                <ItemAction onDelete = {() => onDeleteItem(item.id)} />
            </div>
            ))}
        </div>
    )
}

export default InventoryDisplay;
