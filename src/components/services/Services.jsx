import React from 'react'
import './services.css'
import {SiTarget} from 'react-icons/si'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>An online presence</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Landing page</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Full responsive design</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Lead collection</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Promote a product or service</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Promote an event or project</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Market yourself or your business</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Offer a contact form</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Get appointments</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Solution</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>5-10 pages</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Full responsive design</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Unlimited product inventory</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Content management system</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Cart checkout</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Payment system</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Sell products</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Sell services</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Sell memberships</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Collect donations</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Secure payment & checkout</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>More than a website</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon' />
              <p>3 pages</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Full responsive design</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Editable contents</p>
            </li>
            <li>
              <GoCheck className='service__list-icon' />
              <p>Content management system</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Market yourself or your business</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Promote a physical business</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Showcase work/expertise</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Offer a contact form</p>
            </li>
            <li>
              <SiTarget className='service__list-icon' />
              <p>Get appointments</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services