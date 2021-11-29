import React from 'react';
import { Link } from 'gatsby';

// import icons
import { FaLaptopCode } from 'react-icons/fa';

// import items
import { MenuItems } from '../data/menuItems';

export default function Menu() {
  return (
    <nav className='nav container'>
      <div className='nav--logo'>
        <FaLaptopCode />
        <h3 className='fullname'>
          <span>Yassine</span> Tababi
        </h3>
      </div>
      <ul className='nav--list'>
        {MenuItems.map((item, i) => (
          <li key={i} className='nav--items'>
            <Link to={item.url} className={item.cName}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
