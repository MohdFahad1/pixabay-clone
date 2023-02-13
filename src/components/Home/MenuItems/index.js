import React from 'react'
import './style.css';
import { menuItems } from './data';
const MenuItemsList = ({handleMenuItemClicked}) => (
        <nav>
        <h1>Popular Searches : </h1>
        <ul>
          {menuItems.map(({ label, id }) => (
            <li key={id} id={label} onClick={handleMenuItemClicked} >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    );

export default MenuItemsList;