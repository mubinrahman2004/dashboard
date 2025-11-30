import Image from 'next/image'
import React from 'react'
import saller from '../../public/saller2.png'

const SellerProfile = () => {
  return (
    <div>
        <div>
            <Image
            src={saller}
            alt='saller'
            />
        </div>
    </div>
  )
}

export default SellerProfile