import React from 'react';

const Item = (props) => {
    return (
        <div className="Item">
            <h2>{props.title}</h2>
        </div>
    );
};

export default Item;