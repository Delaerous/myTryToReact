import React from "react";
import classNames from "classnames";

    function Button({onClick, className, outline, children}) {
        return (
            <button 
            onClick = {onClick}
            className={classNames('button',className, {
                'button-outline': outline,
            },
            {
                'button-children':children,
            })}>{children}</button>   
            )
    }
export default Button;