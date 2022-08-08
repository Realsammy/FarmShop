import React from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 FarmsEquipment Nigeria all right reserved</p>
      
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
        <AiFillTwitterCircle />
       </p>

    </div>
  )
}

export default Footer