import React from "react";

export const Card = ({ id, joke }) => {
    return (
        <div className="joke-card">
            <button className="toggle-favorite-button">+</button>
            <p>{id}</p>
            <p>{joke}</p>
        </div>
    )
};
