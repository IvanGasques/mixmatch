import React from 'react';
import mixmatxh from '../../assets/|| COVER MIX&MATCH ||.png'
import img1 from '../../assets/galery/cd1.jpg'
import img2 from '../../assets/galery/cd2.jpg'
import img3 from '../../assets/galery/cd3.jpg'


const Allme = () => {
  return (
    <div className="allme-container">
      <h1 className="allme-title">Sobre Mix and Match</h1>
      <p className="allme-description">
        A Mix and Match é uma empresa especializada em renovação de móveis, que busca trazer vida aos objetos e transformá-los em peças únicas e personalizadas. Com uma equipe de profissionais experientes e dedicados, a empresa se destaca pela habilidade em encontrar móveis antigos e dar a eles o tratamento que precisam para se tornarem novos novamente.
      </p>
      <p className="allme-description">
        A empresa busca oferecer soluções personalizadas e sob medida para seus clientes, levando em consideração as necessidades e preferências de cada um. A Mix and Match trabalha com diversos tipos de móveis, desde cadeiras e mesas até estantes e armários, e utiliza técnicas avançadas de restauração e renovação para garantir a qualidade e durabilidade dos produtos.
      </p>
      <p className="allme-description">
        E, acima de tudo, a Mix and Match valoriza a sustentabilidade e o respeito ao meio ambiente em todo o seu trabalho.
      </p>
      <h2 className="allme-subtitle">Nossos serviços</h2>
      <ul className="allme-services">
        <li className="allme-service">
          <img src={img1} alt="Serviço de pintura" className="allme-service-img" />
          <h3 className="allme-service-title">Pintura</h3>
          <p className="allme-service-description">Nossos profissionais utilizam técnicas modernas de pintura para renovar móveis antigos e dar um toque de cor e estilo a cada peça.</p>
        </li>
        <li className="allme-service">
          <img src={img2} alt="Serviço de restauração" className="allme-service-img" />
          <h3 className="allme-service-title">Restauração</h3>
          <p className="allme-service-description">Utilizamos técnicas avançadas de restauração para revitalizar móveis desgastados pelo tempo e devolvê-los à sua beleza original.</p>
        </li>
        <li className="allme-service">
          <img src={img3} alt="Serviço de customização" className="allme-service-img" />
          <h3 className="allme-service-title">Customização</h3>
          <p className="allme-service-description">Transformamos móveis simples em peças únicas e personalizadas, de acordo com as preferências e estilo de cada cliente.</p>
        </li>
      </ul>
      

      <div className='mix'><img src={mixmatxh} alt='Foto de Carla ' /></div>
    </div>
  )
}

export default Allme;
