import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Naga from '../assets/h1.jpg'
import Jelle from '../assets/h2.jpg'
import Ian from '../assets/h3.jpg'

const Slider = () => {
  return (
   <>


<Carousel className="m-5 bg-dark mr2">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={Jelle}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>royalty free.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
  <img 
  className="d-block w-100 "
  src={Naga} 
  alt='Naga' />
    <Carousel.Caption>
      <p>royalty free.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Ian}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p>royalty free.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</>
  )
}

export default Slider