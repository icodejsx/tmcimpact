import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <main>
            <div className='bg-[#670000]  px-5 md:px-10 pt-10 pb-16 flex flex-col gap-20 items-center'>
                <div className='flex   flex-col-reverse md:flex-row items-start w-full gap-20 md:items-center'>
                    <Image src={"/logg.png"} alt='' width={300} height={300} />
                    <div className='flex flex-col gap-6 text-white'>
                        <h1>Contact</h1>
                        <h1>Careers</h1>
                        <h1>Sociala</h1>
                    </div>
                </div>

            </div>
            <span className='text-white text-center p-3 bg-black w-full block text-xs'>© 2024 Tegan Mosugu Company</span>
        </main>
    )
}

export default Footer