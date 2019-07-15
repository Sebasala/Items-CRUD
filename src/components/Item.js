import React from 'react';

const Item = (props) => {
    return (
        <li className="Item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
};

export default Item;