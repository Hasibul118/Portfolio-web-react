import React, {useState, useEffect} from 'react'
import './navigation.css'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServerLine} from 'react-icons/ri'

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Navigation = () => {

  const [activeNav, setActiveNav] = useState('#')
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`${ scrollDirection === "down" ? "bottom-24" : "bottom-0"} h-24 bg-blue-200`}>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServerLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navigation