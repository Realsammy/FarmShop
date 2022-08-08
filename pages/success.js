import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { schoolPride } from '../lib/utils'

const Success = () => {
    const { setCartItems, setTotalQuantities, setTotalPrices } = useStateContext()

    useEffect (() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrices(0);
        setTotalQuantities(0);
        schoolPride();
        }, []);
        
  
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Check your email for details and receipt</p>
            <p className='description'>If you have further questions regarding this transaction, please email us : <a className='email'
            href='mailto:sales@farmsequipment.com'>sales@farmsequipment.com</a></p>
            <Link href='/'>
                <button type="button" className="btn" width ="300px">Continue shopping</button>
                </Link>
            </div>

    </div>
  )
}

export default Success