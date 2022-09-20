import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Client Name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus amet fuga optio consequatur quo itaque totam repellat est error.'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Client Name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus amet fuga optio consequatur quo itaque totam repellat est error.'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Client Name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus amet fuga optio consequatur quo itaque totam repellat est error.'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Client Name',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi natus amet fuga optio consequatur quo itaque totam repellat est error.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="client" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials