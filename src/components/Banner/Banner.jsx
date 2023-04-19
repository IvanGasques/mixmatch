import React from 'react'
import { Parallax } from 'react-parallax';
import DescriptionBanner from './DescriptionBanner';
import foto from '../../assets/|| COVER MIX&MATCH ||.png'
import './banner.css'

const Banner = () => {
  return (
   
      <Parallax className='banner'
        bgImage={foto}
        bgImageAlt="Imagem de fundo"
        strength={500}
        style={{ padding: '0' }}
      >
        <DescriptionBanner />
      </Parallax>
  )
}

export default Banner
