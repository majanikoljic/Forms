import React from "react";
import {useState} from 'react'

const ItemForm = ({onAddItem}) => {
    const[name, setName] = useState('')
    const[quantity, setquantity] = useState('')
    const[purpose, setpurpose] = useState('')
    const[error, setError] = useState('')
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !quantity || !purpose || !agreed){
            setError("All fields are required, and you must agree to the terms!")
            return;
        }

        onAddItem({name, quantity, purpose})
        setName('')
        setquantity('')
        setpurpose('')
        setAgreed(false);
        setError('')
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input 
            type="number" 
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
            required
            />
            <input
            type="text" 
            placeholder="Purpose"
            value={purpose}
            onChange={(e) => setpurpose(e.target.value)}
            required
            />
            <div className="checkbox-container">
                <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms">
                I agree to the <a href="/terms">terms and conditions</a>
            </label>
            </div>
            
            {error && <p>{error}</p>}
            <button type="submit">Add</button> 
        </form>

    )
}

export default ItemForm;