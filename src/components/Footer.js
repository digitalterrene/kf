import React from 'react'
import logo from '../assets/logo.png'
import { ImLinkedin } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='w-full border-t pt-10 text-xl mt-20 lg:mt-56 items-start text-white lg:flex justify-between'>
                <div className='lg:w-1/2 text-white flex items-center  lg:px-10'>
                    <NavLink to={'/'} className={'flex'}>
                        <img src={logo} alt='logo' />
                    </NavLink>
                    <p className='mt-2 lg:text-2xl'>Keng Foundation</p>
                </div>
                <div className='lg:w-1/2 ml-3 mt-6 lg:mt-0 lg:ml-0'>
                    <p className='text-3xl lg:text-6xl text-purple-900 mr-16 font-bold'>
                        Connect
                    </p>
                    <p className='my-2 text-sm lg:text-xl'>
                        123-456-7890
                    </p>
                    <p className='my-2 text-sm lg:text-xl'>
                        610 Main St Vancouver,
                    </p>
                    <p className='my-2 text-sm lg:text-xl'>
                        BC V6A 2V3,
                    </p>
                    <p className='my-2text-sm lg:text-xl '>
                        Canada
                    </p>
                    <p className='my-2 text-sm lg:text-xl'>
                        info@kf.vertueal.com
                    </p>
                    <div className='my-8 flex w-40 justify-between'>
                        <ImLinkedin />
                        <FiInstagram />
                        <FaFacebookF />
                        <BsTwitter />
                    </div>
                </div>
            </div>
            <p className='text-center py-8 text-white'>&copy; Keng Foundation 2023</p>
        </>
    )
}

export default Footer