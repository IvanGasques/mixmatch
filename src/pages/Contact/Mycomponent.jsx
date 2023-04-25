import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Contact from './Contact';
import './contact.css';
import carla from '../../assets/WhatsApp Image 2023-03-31 at 15.37.36.jpeg'

const Contactos = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contato-box">
          <h2>Entre em contato conosco</h2>
          <div className="contato-info">
            <div className="contato-item">
              <FaPhoneAlt id='svg'/>
              <span>+258 84 29 23 411</span>
            </div>
            <div className="contato-item">
              <FaEnvelope id='svg'/>
              <span>mixandmatchmozambique@gmail.com</span>
            </div>
            <div className="contato-item">
              <FaInstagram id='svg'/>
              <span>Instagram: @mix_match_mz</span>
            </div>
          </div>
        </div>

        <div className="dona-box">
          <img src={carla}  alt="Foto da dona da empresa"/>
          <h2>Carla Alfredo</h2>
          <p>Sua paixão pela restauração de móveis é evidente em cada projeto que ela realiza. Ela dedica tempo e atenção aos detalhes para garantir que cada peça seja cuidadosamente restaurada e transformada em algo que seja ao mesmo tempo funcional e esteticamente agradável.</p>
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default Contactos;