import React from 'react'
import first from '../../assets/pexels-rachel-claire-4857775.jpg'
import sec from '../../assets/pexels-rachel-claire-4846101.jpg'
import terc from '../../assets/pexels-cup-of-couple-7303151.jpg'
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {
  return (
    <div id='layout'>
    <Carousel nextIcon={null} prevIcon={null} nextLabel={null} 
      prevLabel={null} fade >
      <Carousel.Item >
        <img
          className="d-block w-90 "
          height="800"
          src={first}
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mix and Match Galeria</h3>
          <p>Nosso portfólio de restauração de móveis apresenta uma ampla variedade de projetos em que trabalhamos </p>
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
          <h3>Mix and Match Galeria</h3>
          <p> desde peças clássicas de madeira até móveis modernos e estofados.</p>
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
          <h3>Mix and Match Galeria</h3>
          <p>
          Cada peça apresentada em nosso portfólio foi cuidadosamente restaurada para refletir seu design original
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}

export default Carousel2;