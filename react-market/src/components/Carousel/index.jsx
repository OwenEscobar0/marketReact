import Carousel from 'react-bootstrap/Carousel';


import React from 'react'

const CarouselHome = () => {
  return (
    <div>   <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.pioneerdj.com/-/media/pioneerdj/images/products/all-in-one-system/opus-quad/opus-quad_prm_frontangle_221223.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>OPUS QUAD ALL IN ONE</h5>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.pioneerdj.com/-/media/pioneerdj/images/products/all-in-one-system/xdj-rx3/xdj-rx3_prm_top_210830_pc.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>PIONEER RX3</h5>
        
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel></div>
  )
}

export default CarouselHome