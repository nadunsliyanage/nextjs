'use client'
import React from 'react'

// Props for Test & Event Button
interface ButtonProps {
    click: () => void,
    label: string
}


const Button: React.FC<ButtonProps> = ({ click, label }) => {
  return (
    <button onClick={click} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        {label}
    </button>
  )
}

export default Button