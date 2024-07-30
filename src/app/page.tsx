import Image from "next/image";
import { MdEmail } from "react-icons/md";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import OurVission from "./components/OurVission";
import Footer from "./components/Footer";

export default function Home() {
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
