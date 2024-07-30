import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const OurVission = () => {
    return (
        <div className='lg:p-10 p-3 flex flex-col gap-10 md:grid grid-cols-2 mt-20'>

            <div data-aos="fade-up" className='  flex flex-col gap-6  col-span-1 bg-[#670000] text-white rounded-2xl p-5 md:p-10'>
                <h1 className='font-bold md:text-2xl text-md'>Our Vision</h1>

                <p className='text-md text-'>Our vision is to transform the human experience by providing essential information that enriches lives. We aim to be a beacon of knowledge and innovation, driving positive change across communities and industries globally. By leveraging cutting-edge research, media, and technology, we envision a future where informed decisions lead to improved health, sustainable development, and enhanced social impact.
                </p>
            </div>


            <div data-aos="fade-up" className=' flex flex-col gap-6  col-span-1 bg-[#060606] text-white rounded-2xl p-6 md:p-10'>
                <h1 className='font-bold text-md md:text-2xl'>Our Mision</h1>

                <p className='text-md text-'>
                    The Tegan Mosugu Company is dedicated to developing media products and providing research services that inform and improve quality of life. Our mission includes, Engaging Media, Consulting Excellence, Community Collaboration, Global Reach:

                    Through these efforts, we aim to transform access to and use of information, contributing to a better, more informed world.
                </p>
            </div>




        </div>

    )
}

export default OurVission