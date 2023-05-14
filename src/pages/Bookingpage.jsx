import React from 'react'
import './Bookingpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Typography } from '@mui/material';
function Bookingpage() {
  return (
    <>
    <div className='fuull'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 courouselimages"
          src="./assets/moviecourousel5.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 courouselimages"
          src="./assets/moviecorousel4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 courouselimages"
          src="./assets/moviecorosel.avif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Bookingpage