import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import SellerProfile from '../client/SellerProfile'

const ClientDetails = ({product}) => {
  return (
    <div>
        <div>
            <h1>Seller Details</h1>
           <div className='flex justify-between'>
             <h2>Home <IoIosArrowForward />Seller details</h2>
            <h3><FaCalendarAlt /> Feb 15, 2022 - Feb 21, 2022</h3>
           </div>
           <SellerProfile/>
        </div>
    </div>
  )
}

export default ClientDetails