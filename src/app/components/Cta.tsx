import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (

        <main className='lg:p-10 p-5 flex flex-col items-center mt-20 gap-10'>
            <h1 className='font-bold text-2xl lg:text-4xl border-b-4 border-[#670000]'>Our Core Value</h1>
            <div className=' flex flex-col md:grid grid-cols-2 gap-5 md:gap-10'>
                <div className='col-span-1 flex gap-10 p-6 md:p-12 rounded-xl shadow-xl'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl flex items-start border-b-4 border-[#670000]'>Passion</h1>
                        <p>Our passion drives us to excel and make a positive impact. We are dedicated to delivering high-quality research, insightful media, and transformative consulting services. This fervor inspires us to continually strive for greatness and make a meaningful difference in the lives we touch.
                        </p>
                    </div>
                </div>

                <div className='col-span-1 flex gap-10 p-6 md:p-12 rounded-xl shadow-xl'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl flex items-start border-b-4 border-[#670000]'>Teamwork</h1>
                        <p>Collaboration is key to our success. Our diverse team brings unique perspectives and skills, working together to tackle challenges and achieve exceptional results. We value open communication, mutual respect, and shared goals, believing that teamwork makes us stronger.
                        </p>
                    </div>
                </div>

                <div className='col-span-1 flex gap-10 p-6 md:p-12 rounded-xl shadow-xl'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl flex items-start border-b-4 border-[#670000]'>Equity</h1>
                        <p>Equity is at the core of our mission. We are committed to creating an inclusive environment where everyone has equal access to opportunities. Guided by fairness and justice, we ensure our work addresses the needs of all communities, especially the underserved, striving for a more just and equitable world.
                        </p>
                    </div>
                </div>

                <div className='col-span-1 flex gap-10 p-6 md:p-12 rounded-xl shadow-xl'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl flex items-start border-b-4 border-[#670000]'>Innovation</h1>
                        <p>EInnovation drives our progress. We embrace change and continuously seek new ways to enhance our services and expand our impact. By encouraging creativity and forward-thinking, we stay at the forefront of industry trends and deliver cutting-edge solutions.
                        </p>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default Cta