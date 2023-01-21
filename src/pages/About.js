import React from 'react'
import larry from '../assets/larry.jpg'
import register from '../assets/register.png'
import mmanto from '../assets/mmanto.png'
import nate from '../assets/nate.png'
import { useNavigate } from 'react-router-dom'
import AboutCarousel from '../components/AboutCarousel'

const About = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full  text-xl text-white'>
            <div className='w-full items-center  lg:px-20'>
                <div className='items-center justify-center my-10 lg:my-28 flex'>
                    <p className='text-2xl lg:text-6xl mr-3 my-auto lg:mr-20 font-bold'>
                        About Us
                    </p>
                    <button className='text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-white self-center rounded-3xl'>
                        <p className='px-4 lg:px-16 my-auto py-1 lg:py-2'>AND YOU</p>
                    </button>
                </div>
                <div className='w-full'>
                    <AboutCarousel />
                </div>
            </div>
            <p className='mt-20 lg:mt-56 lg:px-40 font-bold text-4xl text-center'>
                Our Team
            </p>

            <div className='w-full lg:flex items-center justify-end mt-20 lg:mt-56 px-3 lg:px-auto'>
                <div className=''>
                    <p className='text-2xl lg:text-6xl text-purple-900 font-bold'>
                        Mmanto Ramaila
                    </p>
                    <p className='my-8 font-bold'>
                        Lead Officer
                    </p>
                </div>
                <div className='w-full lg:w-1/2 lg:ml-20'>
                    <img className='rounded-3xl lg:w-1/2' src={mmanto} alt='logo' />
                </div>
            </div>
            <div className='w-full lg:ml-8 lg:flex items-center justify-end mt-20 px-3 lg:mt-56 lg:px-auto'>
                <div className=''>
                    <p className='text-3xl lg:text-6xl text-purple-900 font-bold'>
                        Nate Mthemwa
                    </p>
                    <p className='my-8 font-bold'>
                        Lead Officer
                    </p>
                </div>
                <div className='w-full lg:w-1/2 lg:ml-20'>
                    <img className='rounded-3xl lg:w-1/2' src={nate} alt='logo' />
                </div>
            </div>
            <div className='w-full lg:ml-8 lg:flex items-center justify-end mt-20 px-3 lg:mt-56 lg:px-auto'>
                <div className=''>
                    <p className='text-3xl lg:text-6xl text-purple-900 font-bold'>
                        Larry Kingstone
                    </p>
                    <p className='my-8 font-bold'>
                        Lead Officer
                    </p>
                </div>
                <div className='w-full lg:w-1/2 lg:ml-20'>
                    <img className='rounded-3xl lg:w-1/2' src={larry} alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default About