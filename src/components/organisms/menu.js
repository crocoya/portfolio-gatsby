import React from 'react';
import { Link } from 'gatsby';

// import icons
import { FaLaptopCode } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

// import items
import { MenuItems } from '../data/menuItems';

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className='nav container'>
      <div className='nav--logo'>
        <FaLaptopCode />
        <h3 className='fullname'>
          <span>Yassine</span> Tababi
        </h3>
      </div>
      <ul className={open ? 'nav--links active' : 'nav--links'}>
        {MenuItems.map((item, i) => (
          <li key={i} className='nav--items'>
            <Link to={item.url} className={item.cName} onClick={closeMenu}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className='nav--mobile' onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
