import React from "react";

function Tile({tileTitle, tileText, tileImage}) {

    if (!tileImage) {
        return (
            <section>
                <h2>{tileTitle}</h2>
                <p>{tileText}</p>
            </section>
        );
    } else return (
        <section>
            <img src={tileImage} alt={tileTitle}/>
        </section>
    );
}

export default Tile;
