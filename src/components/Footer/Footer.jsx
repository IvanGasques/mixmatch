import React from 'react'
import  {FaInstagram, FaRegEnvelope, FaRegComments}  from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
  <>
    <div className='containerFooter'>


      <div className='footer-1'>
      <div className='footer-1cont'>
       <p >Mix and Match</p> 
        <p>"Transformamos móveis esquecidos em obras de arte com personalidade! Dê vida nova aos seus móveis antigos com nossos serviços de restauração."</p>
      </div></div>

<div className='footer-2'>
<div className='footer-2cont'>
<p>> Portifolio</p>
<p>> Blog</p>
<p>> Contacto</p>
<p>> Portifolio</p>
</div>
</div>

<div className='footer-3'>
<div className='footer-3cont'>
<div className='icone'>
<FaInstagram className='icons' size={25} />
<FaRegEnvelope className='icons' size={27}/>
<FaRegComments className='icons' size={28}/></div>
<p>email.mixmatch@gmail.com</p>
<p>Tlm: 999 000 111</p>
<p>Maputo xxx LLL</p>
</div>
</div>
    </div>
    <div className='footer'>Copyright © All rights reserved. </div>
    </>
  )
}

export default Footer
