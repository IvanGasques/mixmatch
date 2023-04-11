import React from 'react';

import foto from '../../assets/foto.jpg';
import './about.css';


const About = () => {
    
    return (
        <div className='aboutprincipal'>

            <div className='about' id='text-focus-in'>
                <h1>Sobre Mix and Match</h1>
                <p>A Mix and Match é uma empresa especializada em renovação de móveis, que busca trazer vida aos objetos e transformá-los em peças únicas e personalizadas. Com uma equipe de profissionais experientes e dedicados, a empresa se destaca pela habilidade em encontrar móveis antigos e dar a eles o tratamento que precisam para se tornarem novos novamente.</p>

                {/* <p>A empresa busca oferecer soluções personalizadas e sob medida para seus clientes, levando em consideração as necessidades e preferências de cada um. A Mix and Match trabalha com diversos tipos de móveis, desde cadeiras e mesas até estantes e armários, e utiliza técnicas avançadas de restauração e renovação para garantir a qualidade e durabilidade dos produtos.</p>

                <p>E, acima de tudo, a Mix and Match valoriza a sustentabilidade e o respeito ao meio ambiente em todo o seu trabalho.</p> */}
                <div className='button'>Saber mais</div>
            </div>
            <div><img className='foto' id='tilt-in-top-1' src={foto} alt='fotos' /></div>
        </div>
    )
}

export default About
