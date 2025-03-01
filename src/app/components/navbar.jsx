import Link from 'next/link';
import React from 'react';

const Navbar = () => {
     return(
        <nav className="bg-black p-4">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center overflow-hidden">
            <Link href="/" className="text-white px-3  text-2xl font-bold rounded-md hover:scale-110 cursor-pointer duration-300 ease-out hover:text-blue-500 font-custom">Kitthapas</Link>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-white px-3 py-2 font-bold rounded-md text-sm  hover:text-blue-500 hover:scale-125 cursor-pointer duration-300 ease-out font-custom">Home</Link>
                    <Link href="/about" className="text-white px-3 py-2 font-bold rounded-md text-sm  hover:text-blue-500 hover:scale-125 cursor-pointer duration-300 ease-out font-custom">About</Link>
                    <Link href="/Projects_1" className="text-white px-3 py-2 font-bold rounded-md text-sm  hover:text-blue-500 hover:scale-125 cursor-pointer duration-300 ease-out font-custom">Projects</Link>
                    <Link href="/Gallery" className="text-white px-3 py-2 font-bold rounded-md text-sm  hover:text-blue-500 hover:scale-125 cursor-pointer duration-300 ease-out font-custom">Gallery</Link>
                </div>
            </div>
        </nav>
    );
    
};

export default Navbar;

