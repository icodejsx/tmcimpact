"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='md:p-5 relative'>
            <div className='flex items-center justify-between w-full p-5 bg-[#FAF9F9] md:rounded-3xl md:shadow-xl'>
                <Image src={"/logo.png"} width={100} height={100} alt='logo' />
                <div className='hidden md:flex gap-8 items-center font-medium text-gray-700'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/research"}>Research</Link>
                    <Link href={"/media"}>Media</Link>
                    <Link href={"/social-impact"}>Social Impact</Link>
                    <Link href={"/team"}>Team</Link>
                </div>
                <Link href={"/search"} className='hidden md:block bg-[#670000] p-2 rounded-full'>
                    <CiSearch className='text-white text-3xl font-bold' />
                </Link>
                <div className='md:hidden' onClick={toggleMenu}>
                    {menuOpen ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
                </div>
            </div>
            {menuOpen && (
                <div className='fixed inset-0 bg-[#FAF9F9] flex flex-col items-center justify-center gap-5 p-5 z-50'>
                    <div className='absolute top-5 right-5' onClick={toggleMenu}>
                        <FiX className='text-3xl' />
                    </div>
                    <Link href={"/"} onClick={toggleMenu} className='text-2xl'>Home</Link>
                    <Link href={"/research"} onClick={toggleMenu} className='text-2xl'>Research</Link>
                    <Link href={"/media"} onClick={toggleMenu} className='text-2xl'>Media</Link>
                    <Link href={"/social-impact"} onClick={toggleMenu} className='text-2xl'>Social Impact</Link>
                    <Link href={"/team"} onClick={toggleMenu} className='text-2xl'>Team</Link>
                    <Link href={"/search"} className='bg-[#670000] p-2 rounded-full' onClick={toggleMenu}>
                        <CiSearch className='text-white text-3xl font-bold' />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar
