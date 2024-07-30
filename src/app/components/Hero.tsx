import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='p-10 grid grid-cols-2'>
            <Image src={"/About-us.png"} className='rounded-xl col-span-1' width={500} height={100} alt='' />

            <div className='flex flex-col gap-8 items-start justify-between'>

                <div className=' flex flex-col gap-6 col-span-1'>
                    <h1 className='font-bold text-3xl flex text-[#670000] '>ABOUT US</h1>
                    <p className='text-xl'>Our innovative team is dedicated to transforming lives through the power of information and research. At our core, we offer robust and high-quality research services spanning public policy, global health, international development, and beyond. Additionally, our boutique consulting service specializes in enhancing brand and social impact. Since our establishment in 2019, we have collaborated with diverse organizations across philanthropy, nonprofits, and the corporate sector.

                        <br />
                        <br />


                        We launched the Tegan Show in Lagos, Nigeria, prior to its move to Miami, Florida, USA. This global infotainment talk show seamlessly informs and entertains audiences!</p>
                </div>

                <Link href={""} className='px-14 hover:bg-white  hover:text-[#670000] hover:border-[#670000] hover:border-4  text-white bg-[#670000] py-4 rounded-full'>
                    READ MORE
                </Link>
            </div>
        </div>
    )
}

export default Hero