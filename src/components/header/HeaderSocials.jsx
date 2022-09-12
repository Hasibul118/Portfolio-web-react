import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials