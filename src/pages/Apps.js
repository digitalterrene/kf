import React from 'react'
import ker from '../assets/ker.png'
import kent from '../assets/kent.png'
import kepasm from '../assets/kepasm.png'

const Apps = () => {
    return (
        <div className='w-full  text-white'>
            <p className='text-4xl lg:text-6xl ml-4 lg:ml-12 my-8 text-purple-900 font-bold'>
                Our Software Ecosystem
            </p>
            <div className='w-full lg:flex my-16 lg:my-32'>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10  lg:m-20 mt-10 lg:mt-40'>
                        …is the registry responsible for filling the
                        information of everyone who is in the Keng
                        ecosystem
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It allows the user to update their
                        information on their profile so that the
                        company can access up to date user data
                        for relevence.

                    </p>
                </div>
                <div className='lg:w-1/3 my-16 lg:my-48'>
                    <p className='text-xl lg:text-2xl text-center my-6 font-bold'><a style={{ textDecoration: 'none' }} className='text-sm p-3 mr-2 rounded-full border'>01</a>Keng Entity Registry (KER)</p>

                    <img className='rounded-3xl mx-auto' src={ker} alt='logo' />
                </div>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It authenticates the users through
                        fingerprinst and email and password for ready
                        use by the company
                        '
                        s departments and
                        trusted third parties.
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It securely stores the user data in the
                        cloud for simple and easy REST APIs
                        to make calls at any given time
                    </p>
                </div>
            </div>
            <div className='w-full lg:flex my-48'>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        …is the board that governs every business formed under Keng
                        Inc to only trade in their desired niche. Therefore a business
                        trades one particular product or service only in its simplest
                        form.
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It allows the company to update their
                        niche with automatic reporting to the
                        KENT which regulates compliance.
                    </p>
                </div>
                <div className='lg:w-1/3 my-16 lg:my-48'>
                    <p className='text-xl lg:text-2xl text-center my-6 font-bold'><a style={{ textDecoration: 'none' }} className='text-sm p-3 mr-2 rounded-full border'>02</a>Keng Economy Niche Traders (KENT)</p>

                    <img className='rounded-3xl mx-auto' src={kent} alt='logo' />
                </div>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It allows the company to update its info for use across the Keng
                        Foundation software and affiliates
                        It enforces compliance to the operations specifications requirements set
                        by KENT
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It securely stores the company'
                        s data in Cloud Storage
                        the cloud for simple and easy REST
                        APIs to make calls at any given time.

                    </p>
                </div>
            </div>
            <div className='w-full lg:flex my-48'>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        …is the platform where consumers in the Keng Economy
                        Ecosystem buy goods and services. Businesses that are KENT
                        compliant who have a specific operations field in KENES are
                        listed as suppliers. External Consumers can also buy from this
                        platform in Kerons which they can buy on KECEM.
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It lists all the available products and services to prospective buyers. The
                        pricing accomodates low to high income eaners and the currency used is
                        Kerons. Credit purchases are also supported with the aim of ensuring
                        complete access to products for every potential consumer

                    </p>
                </div>
                <div className='lg:w-1/3 my-16 lg:my-48'>
                    <p className='text-xl lg:text-2xl text-center my-6 font-bold'><a style={{ textDecoration: 'none' }} className='text-sm p-3 mr-2 rounded-full border'>03</a>Keng Economy Product and Services Market (KEPASM)</p>

                    <img className='rounded-3xl mx-auto' src={kepasm} alt='logo' />
                </div>
                <div className='lg:w-1/3 mt-16 lg:mt-48'>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        Through AI and 3D technology, it allows
                        buyers to virtually experiment with the listed
                        products to sees results and effects. This is
                        crucial when buying at least medical products
                        and 'trade-services
                        ' .
                    </p>
                    <p className='m-10 lg:m-20 mt-10 lg:mt-40'>
                        It lists all the suppliers registered with
                        KENT who sell the respective listings.
                        It allows users to like, comment and share on the listed products with the
                        available community and even inter-app social intergration to user's prefferences.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Apps