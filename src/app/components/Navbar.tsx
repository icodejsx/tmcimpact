import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='p-5'>
            <div className='flex items-center  justify- w-full p-5 bg-[#FAF9F9] rounded-3xl  shadow-xl'>
                <div className='flex items-center justify-between  w-full'>
                    <Image src={"/logo.png"} width={100} height={100} alt='' />
                    <div className='flex gap-8 items-center text-[]  font-medium text-gray-700'>
                        <Link href={""}>Home</Link>
                        <Link href={""}>Rescreach</Link>
                        <Link href={""}>Media</Link>
                        <Link href={""}>Social Impact</Link>
                        <Link href={""}>Team</Link>
                    </div>
                    <Link href={""} className='bg-[#670000] p-2 rounded-full'>
                        <CiSearch className='text-white text-3xl  font-bold' />
                    </Link>
                </div>
                <div className='bg-[#670000] p-'>

                </div>
            </div>
        </div>
    )
}

export default Navbar