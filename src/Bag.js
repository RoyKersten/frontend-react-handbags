import React from "react";

function Bag({bagImage, bagTitle,bagLabel, bagName, bagPrice }) {
    return (
        <article>
            <span>{bagLabel}</span>
            <img src={bagImage} alt={bagTitle} />
            <p>{bagName}</p>
            <h4>{bagPrice}</h4>
        </article>
    );
}

export default Bag;