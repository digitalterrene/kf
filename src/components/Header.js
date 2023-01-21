import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'



const Header = () => {
  return (
    <div className='w-full text-white flex items-center py-6 px-1 lg:px-10'>
       <NavLink to={'/'} className={'flex'}>
       <img src={logo} alt='logo'/>
        </NavLink>
        <p className='mt-2 text-2xl'>Keng Foundation</p>
    </div>
  )
}

export default Header