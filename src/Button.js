import React from "react";

function Button({buttonName, disabled, buttonMessage, buttonDescription}) {
    return (
        <button name={buttonName} disabled={disabled} type="button"
                onClick={() => console.log({buttonMessage})}>{buttonDescription}</button>
    );
}

export default Button;
