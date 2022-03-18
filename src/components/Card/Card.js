import React from "react";

export const Card = ({ id, joke, onAdd, onRemove, isFav }) => {
    return (
        <div className="joke-card">
            <button className={isFav ? "" : "toggle-favorite-button"} onClick={isFav ? onRemove : onAdd}>{isFav ? "-" : "+"}</button>
            <p>{id}</p>
            <p>{joke}</p>
        </div>
    )
};
