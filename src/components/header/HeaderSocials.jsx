import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/hasibulhasan/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Hasibul118/' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://web.facebook.com/Hasibul.Hasan.07/' target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials