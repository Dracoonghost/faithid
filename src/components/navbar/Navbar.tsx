import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import DockNavbar from "./dock";


const navLinks = [
    { name: 'Start', link: '/' },
    { name: 'DeFi', link: '/defi-methods' },
    { name: 'Exchange', link: '/exchange' },

];

const Navbar = () => {
  return (
    // <nav className='relative flex items-center py-4 mt-5'>
    //     {/* Left Side Icon */}
    //     <div className="flex items-center dark:invert">
    //         <Image src='/vercel.svg' alt="Logo" width={70} height={30} />
    //     </div>

    //     {/* Right Side Icons */}
    //     <div className="ml-auto">
    //         <DockNavbar />
    //     </div>
    // </nav>
    <nav className='relative flex items-center py-4 mt-5'>
    {/* Left Side Icon */}
    <div className="flex items-center dark:invert">
        <Image src='/vercel.svg' alt="Logo" width={70} height={30} />
    </div>

    {/* Right Side Icons */}
    <div className="lg:ml-auto lg:flex md:flex hidden">
        <DockNavbar />
    </div>
</nav>
  );
};

export default Navbar;
