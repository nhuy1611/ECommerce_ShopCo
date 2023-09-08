import React from 'react'
import prada from '../assets/img/prada-logo.png'
import versace from '../assets/img/versace-logo.png'
import zara from '../assets/img/zara-logo.png'
import gucci from '../assets/img/gucci-logo.png'
import calvinklein from '../assets/img/calvinklein-logo.png'
export const BrandLogo = () => {
  return (
    <div className='brand-logo'>
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvinklein} alt="" />
    </div>
  )
}
