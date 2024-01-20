import React from "react";

// Dummy Button for future reference

// Props for todo item
/**
 * id
 * content
 */

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`bg-primary text-light px-5 py-2 rounded-full ${className}`} {...props}>{children}</button>
    )
}

// ...props for html attributes
// classname is to extend the classes to the App.jsx

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