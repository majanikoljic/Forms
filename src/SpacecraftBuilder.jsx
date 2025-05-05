import React from "react";
import { useState } from 'react'
import ItemForm from "./ItemForm";
import InventoryDisplay from './InventoryDisplay'


const SpacecraftBuilder = () => {
    const[inventory, setInventory] = useState([])

    const addItem = (item) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        setInventory([...inventory, newItem]);
    };

    const deleteItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
    };

    return(
        <div>
            <h1>🚀 Spacecraft Builder</h1>
            <h2>Add Item to the Inventory</h2>
            <ItemForm onAddItem={addItem}/>
            <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem}/>
        </div>
    )
}

export default SpacecraftBuilder;