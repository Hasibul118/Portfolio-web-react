/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' style={{border: 'none'}}>Hasibul Hasan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/hasibulhasan/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Hasibul118/' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://web.facebook.com/Hasibul.Hasan.07/' target="_blank" rel="noreferrer"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer