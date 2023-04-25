import React from 'react'
import  {FaInstagram, FaRegEnvelope, FaRegComments}  from "react-icons/fa";
import './footer.css'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
  <>
    <div className='containerFooter'>


      <div className='footer-1'>
      <div className='footer-1cont'>
       <p ><Link className='link' to="/quemsomos">Mix and Match</Link></p> 
        <p>"Transformamos móveis esquecidos em obras de arte com personalidade! Dê vida nova aos seus móveis antigos com nossos serviços de restauração."</p>
      </div></div>

<div className='footer-2'>
<div className='footer-2cont'>
<p><Link  className='link' to="/galeria" > > Portifolio</Link></p>
<p><Link  className='link' to='/blog' > > Blog</Link></p>
<p> <Link  className='link' to='/contactos' > > Contacto</Link></p>
<p><Link  className='link' to="/quemsomos"> > Quem somos</Link> </p>
</div>
</div>

<div className='footer-3'>
<div className='footer-3cont'>
<div className='icone'>
<a Href='https://www.instagram.com/mix_match_mz/' className='link'><FaInstagram className='icons' size={25} /></a>
<a href="mailto:mixandmatchmozambique@gmail.com" className='link' target="_blank" rel="noopener noreferrer"><FaRegEnvelope className='icons' size={27}/></a>
<FaRegComments className='icons' size={28}/></div>
<p><a href="mailto:mixandmatchmozambique@gmail.com" className='link' target="_blank" rel="noopener noreferrer">mixandmatchmozambique@gmail.com</a></p>
<p>Tlm: +258 84 29 23 411
</p>
<p>Maputo | Mozambique
</p>
</div>
</div>
    </div>
    <div className='footer'>Copyright © All rights reserved. </div>
    </>
  )
}

export default Footer
