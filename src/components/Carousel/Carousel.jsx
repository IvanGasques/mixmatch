import React from 'react'
import first from '../../assets/pexels-rachel-claire-4857775.jpg'
import sec from '../../assets/pexels-rachel-claire-4846101.jpg'
import terc from '../../assets/pexels-cup-of-couple-7303151.jpg'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <div id='layout'><Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-90 "
          height="800"
          src={first}
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 "
          height="800"
          src={sec}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 "
          height="800"
          src={terc}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default CarouselFadeExample;