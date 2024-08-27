import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = "bg-orange-700",
    textColor = "text-white",
    className = '',
    ...props
}) {
  return (
    <button className={`${bgColor} ${textColor} hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button