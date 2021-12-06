import React from 'react';
import { Link } from 'gatsby';
import anime from 'animejs';

// import icons
import { FaLaptopCode } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

// import items
import { MenuItems } from '../molecules/menuItems';

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', function () {
      var header = document.querySelector('nav');
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);

  const handleAnime = (e) => {
    e.preventDefault();

    const link = new URL(e.target.href);
    const targetElement = document.querySelector(link.hash);
    const targetPosition = targetElement.getBoundingClientRect();
    const targetY = targetPosition.y;
    const scrollPosition = targetY + window.scrollY;

    let animeObjPosition = {
      newY: window.scrollY,
    };

    anime({
      targets: animeObjPosition,
      newY: scrollPosition,
      easing: 'easeInOutQuart',
      duration: 2000,
      round: 1,
      update: function () {
        window.scrollTo(0, animeObjPosition.newY);
      },
    });
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className='nav container sticky'>
      <div className='nav--logo'>
        <FaLaptopCode />
        <h3 className='fullname'>
          <span>Croco</span>ya
        </h3>
      </div>
      <ul className={open ? 'nav--links active' : 'nav--links'}>
        {MenuItems.map((item, i) => (
          <li key={i} className='nav--items'>
            <Link to={item.url} className={item.cName} onClick={handleAnime}>
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
