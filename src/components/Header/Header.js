import React from "react";

export const Header = ({ src, title, buttonTitle, onButtonClick }) => {
    return (
        <header className="App-header">
            <img src={src} className="App-logo" alt="logo" />
            <p>
                {title}
            </p>
            <button onClick={onButtonClick}>{buttonTitle}</button>
        </header>
    )
}