import React from 'react'
import first from '../../assets/galery/ce1.jpg'
import sec from '../../assets/galery/ce2.jpg'
import terc from '../../assets/galery/ce3.jpg'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {




  return (
    <div id='layout'>
      <Carousel
        interval={2000}
        nextIcon={null}
        prevIcon={null}
        nextLabel={null}
        prevLabel={null}
        fade
        id='carousel'
      >
        <Carousel.Item id='carousel-item'>
          <img
            className="d-block carousel-img"
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
            className="d-block carousel-img"
            src={sec}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Mix and Match Blog</h3>
            <p>Traz a vida e elegância que seus móveis precisa!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block carousel-img"
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
      </Carousel>
    </div>
  );
}


export default Carousel2;