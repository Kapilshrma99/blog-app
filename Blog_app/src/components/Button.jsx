import React from "react";

export default function Button(className = "",{
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
     ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}