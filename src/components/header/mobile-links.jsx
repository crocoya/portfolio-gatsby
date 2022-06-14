import React from 'react';
import MenuLinks from './menu-links';
import MenuToggle from './menu-toggle';

const MobileLinks = () => {
  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <MenuLinks isOpen={isOpen} />
    </>
  );
};

export default MobileLinks;
