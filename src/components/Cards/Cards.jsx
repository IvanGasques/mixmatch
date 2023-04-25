import React from 'react'
import './cards.css'
import { FaHands, FaRecycle } from "react-icons/fa";
import { RiEqualizerFill} from "react-icons/ri";
import { MdGppGood  } from "react-icons/md";
const Cards = () => {
  return (

<div className='containerCard'>
    <div className='card'>
      
      <p className='icon'><FaHands size="90px"/></p>
        <h2>Serviços Personalizados</h2>
        <p>Oferecemos serviços personalizados para atender às suas necessidades, garantindo a qualidade dos resultados finais. </p>
    </div>
    <div className='card'>
      
      <p className='icon'><RiEqualizerFill size="78px"/></p>
        <h2>Exelencia</h2>
        <p>Nossos resultados finais são cuidadosamente avaliados para garantir a satisfação do cliente.</p>
    </div>
    <div className='card'>
      
      <p className='icon' ><MdGppGood size="85px"/></p>
        <h2>Qualidade</h2>
        <p>Trabalhos personalizados com materiais e acabamentos de primeira linha. Preços justos e atendimento de excelência.</p>
    </div>
    <div className='card'>
      
      <p className='icon'><FaRecycle size="76px"/></p>
        <h2>Cuidado e Preservação</h2>
        <p> Confie seus móveis a uma empresa especializada em preservação do patrimônio, reciclagem criativa e com preços justos e transparentes. </p>
    </div>
    </div>
  )
}

export default Cards
