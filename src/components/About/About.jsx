import React from 'react';
import { Link } from "react-router-dom"
import foto from '../../assets/foto.jpg';
import './about.css';


const About = () => {

    return (
        <div className='aboutprincipal'>

            <div className='about' id='text-focus-in'>
                <h1>Sobre Mix and Match</h1>
                <p>A Mix and Match é uma empresa especializada em renovação de móveis, que busca trazer vida aos objetos e transformá-los em peças únicas e personalizadas. Com uma equipe de profissionais experientes e dedicados, a empresa se destaca pela habilidade em encontrar móveis antigos e dar a eles o tratamento que precisam para se tornarem novos novamente.</p>
                <Link className='link' to="/quemsomos" > <div className='button' >Saber mais</div></Link>
            </div>
            <div><img className='foto' id='tilt-in-top-1' src={foto} alt='fotos' /></div>
        </div>
    )
}

export default About
