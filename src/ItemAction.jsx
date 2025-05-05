import React from "react";

const ItemAction = ({ onDelete }) => {
    return (
    <button onClick={onDelete}>
        Delete
    </button>
    );
};

export default ItemAction;