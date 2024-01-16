import React from "react";


// Props for todo item
/**
 * id
 * content
 */

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`bg-purple-200 text-primary ${className}`} {...props}>{children}</button>
    )
}

/**
 * /components
 *  /ui
 *      button
 *      input
 *      model
 *      dropdowns
 *      ....
 */

export default Button