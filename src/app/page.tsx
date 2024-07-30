"use client"

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import React, { useState, useEffect, useRef } from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import OurVission from "./components/OurVission";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <main>
      <Navbar />
      <Hero />
      <OurVission />
      <Cta />
      <Footer />
    </main>
  );
}
