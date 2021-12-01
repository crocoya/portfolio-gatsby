import React from 'react';
import { Link } from 'gatsby';

// import icons
import { FaLaptopCode } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

// import items
import { MenuItems } from '../data/menuItems';

export default function Menu() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [largeur, setLargeur] = React.useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  React.useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 768) {
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav className='nav container'>
      <div className='nav--logo'>
        <FaLaptopCode />
        <h3 className='fullname'>
          <span>Yassine</span> Tababi
        </h3>
      </div>
      {(toggleMenu || largeur > 768) && (
        <div className='mobile--content'>
          <ul className='mobile--list'>
            {MenuItems.map((item, i) => (
              <li key={i} className='mobile--items'>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!toggleMenu && (
        <ul className='nav--list'>
          {MenuItems.map((item, i) => (
            <li key={i} className='nav--items'>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className='nav--mobile' onClick={toggleNavSmallScreen}>
        <FiMenu />
      </div>
    </nav>
  );
}
