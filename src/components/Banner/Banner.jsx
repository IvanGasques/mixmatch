import React from 'react'
import DescriptionBanner from './DescriptionBanner';
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      {/* <img src={banner} width='100%' height='800px' alt="Banner" /> */}
      <DescriptionBanner/>
    </div>
  )
}

export default Banner
