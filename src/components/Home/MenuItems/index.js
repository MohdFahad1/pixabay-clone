import React from 'react'
import './style.css';
import { menuItems } from './data';
const MenuItemsList = () => {
    return (
        <nav>
        <h1>People also search for: </h1>
        <ul>
          {menuItems.map(({ label, id }) => (
            <li key={id} id={label} >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default MenuItemsList