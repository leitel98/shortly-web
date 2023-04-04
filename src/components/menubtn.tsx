import React from 'react'
import { useState } from 'react'

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  
    const menuDiv = document.getElementById('menu');
    menuDiv?.classList.toggle('hidden');
    menuDiv?.classList.toggle('flex');
  };
  

  const btnClass = isOpen ? 'open' : '';

  return (
    <div className="md:hidden">
      <button
        id='menu-btn'
        type='button'
        className={`z-40 block hamburger md:hidden focus:outline-none ${btnClass}`}
        onClick={handleClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-mid"></span>
        <span className="hamburger-bot"></span>
      </button>
    </div>
  );
}

export default MenuBtn