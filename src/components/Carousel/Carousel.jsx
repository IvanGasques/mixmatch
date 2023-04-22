import React from 'react'
import first from '../../assets/pexels-rachel-claire-4857775.jpg'
import sec from '../../assets/pexels-rachel-claire-4846101.jpg'
import terc from '../../assets/pexels-cup-of-couple-7303151.jpg'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <div id='layout'>
    <Carousel nextIcon={null} prevIcon={null} nextLabel={null} 
      prevLabel={null} fade id='carousel' >
      <Carousel.Item id='carousel-item' >
        <img
          className="d-block w-90 "
          height="800"
          src={first}
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mix and Match Blog</h3>
          <p>Conteúdo útil e interessante abordando temas como técnicas de restauração... </p>
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
          <h3>Mix and Match Blog</h3>
          <p> Traz a vida e elegancia que seus moveis precisa!</p>
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
          <h3>Mix and Match Blog</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default Carousel1;