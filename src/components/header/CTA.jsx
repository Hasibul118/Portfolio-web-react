import React from 'react'
import CV from '../../assets/Resume.pdf'

import {IoMdDownload} from 'react-icons/io'

const CTA = () => {
  return (
    <div className='cta'>
        <div className='btn' style={{display: 'flex', gap: '0.5rem', paddingBottom: '0.6rem'}}>
          <a href={CV} download >Resume</a>
          <div style={{marginTop: '3px'}}>
            <IoMdDownload />
          </div>
        </div>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA