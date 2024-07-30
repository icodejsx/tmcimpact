import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <div className='p-10 grid grid-cols-2 gap-10'>
            <div className='col-span-1 flex gap-4 p-6 rounded-xl shadow-2xl'>
                <Image src={"/vision-1.png"} height={300} width={300} alt='' />
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>Vision</h1>
                    <p>Our vision is to transform the human experience through the dissemination of essential
                        information that enriches peoples lives
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Cta