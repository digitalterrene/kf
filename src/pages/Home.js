import React from 'react'
import work from '../assets/work.png'
import register from '../assets/register.png'
import remote from '../assets/remote.png'
import contribute from '../assets/contribute.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full text-sm lg:text-xl text-white'>
            <div className='w-full lg:flex items-center px-3 lg:px-20'>
                <div className='w-full lg:w-1/2'>
                    <p className='text-3xl lg:text-6xl font-bold'>
                        On your device.
                    </p>
                    <p className='text-3xl lg:text-6xl font-bold'>
                        Set.
                    </p>
                    <button className='text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-white self-center mt-8 lg:mt-16 rounded-3xl'>
                        <p className='px-16 my-auto py-2'> Work</p>
                    </button>
                </div>
                <div className=' lg:w-1/2 mt-8'>
                    <img className='rounded-3xl' src={work} alt='logo' />
                </div>
            </div>
            <p className='mt-20 lg:mt-56 px-3 lg:px-40 font-bold text-xl lg:text-4xl text-center'>
                <a style={{ textDecoration: 'none' }} className='text-purple-900'> Keng Foundation </a>is devoted to creating an economic ecosystem
                whose mandate is ensuring healthy living standards for the global population.
            </p>
            <p className='mt-6  px-3 lg:px-40  lg:text-xl text-center'>
                We envision a 100% global employment rate to ensure all people earn at least a basic
                living with total access to basic needs .</p>

            <div className='w-full lg:flex mt-24 lg:mt-56 px-3 lg:px-20'>
                <div className='w-full lg:w-1/2'>
                    <p className='text-3xl lg:text-6xl text-purple-900 font-bold'>
                        Register with us
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        As an employent seeker in our KELM program.
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        As a business in our KENT programs.
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        As a third party supporter of our mission.
                    </p>
                    <button 
                    onClick={() => navigate('/apps')}
                    className='text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-white self-center mt-4 lg:mt-16 rounded-3xl'>
                        <p className='px-16 my-auto py-2'>Our Apps</p>
                    </button>
                </div>
                <div className='lg:w-1/2 mt-10 lg:mt-0'>
                    <img className='rounded-3xl' src={register} alt='logo' />
                </div>
            </div>
            <div className='w-full lg:flex flex-row-reverse mt-24 lg:mt-56 px-3 lg:px-20'>
                <div className='lg:w-1/2'>
                    <p className='text-3xl lg:text-6xl text-purple-900 font-bold'>
                        Everything Remote
                    </p>
                    <p className='lg:my-8 lg:text-xl'>
                        integrate in and with our system in the comfort of your home
                    </p>
                    <p className='lg:my-8 lg:text-xl'>
                        Or anywhere you want whether you are in the KELM program, KENT or are an independant third party.
                    </p>
                    <button className='text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-white self-center mt-2 lg:mt-16 rounded-3xl'>
                        <p className='px-16 my-auto py-2'> Work</p>
                    </button>
                </div>
                <div className='lg:w-1/2 mt-8 lg:mt-0'>
                    <img className='rounded-3xl' src={remote} alt='logo' />
                </div>
            </div>
            <div className='w-full lg:flex mt-24 lg:mt-56 px-3 lg:px-20'>
                <div className='lg:w-1/2'>
                    <p className='text-3xl lg:text-6xll text-purple-900 mr-16 font-bold'>
                        Contribute to securing healthy economies.
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        You are job hunting?...Lets work together.
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        You are a business?...Lets work together.
                    </p>
                    <p className='lg:my-8 lg:font-bold'>
                        You are a non profit?... Lets work to gether.
                    </p>
                    <button 
                    onClick={() => navigate('/about-us')}
                    className='text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-white self-center mt-2 lg:mt-16 rounded-3xl'>
                        <p className='px-16 my-auto py-2'>About Us</p>
                    </button>
                </div>
                <div className='lg:w-1/2 mt-8 lg:mt-0'>
                    <img className='rounded-3xl' src={contribute} alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default Home