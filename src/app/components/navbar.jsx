'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // ใช้ไอคอนจาก react-icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State สำหรับเปิด-ปิดเมนู

    return (
        <nav className="bg-black p-4">
            <div className="w-full max-w-screen-xl mx-auto px-4  flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold hover:scale-110 duration-300 hover:text-blue-500 font-custom">
                    Kitthapas
                </Link>

                {/* Hamburger Menu Button (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/about" text="About" />
                    <NavLink href="/Projects_1" text="Projects" />
                    <NavLink href="/Gallery" text="Gallery" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-white text-4xl font-bold font-custom">
                    <FiX />
                </button>
                <NavLink href="/" text="Home" onClick={() => setIsOpen(false)} />
                <NavLink href="/about" text="About" onClick={() => setIsOpen(false)} />
                <NavLink href="/Projects_1" text="Projects" onClick={() => setIsOpen(false)} />
                <NavLink href="/Gallery" text="Gallery" onClick={() => setIsOpen(false)} />
            </div>
        </nav>
    );
};

// Component สำหรับ Link เพื่อลดโค้ดซ้ำ
const NavLink = ({ href, text, onClick }) => (
    <Link href={href} className="text-white text-lg font-bold px-3 py-2 rounded-md hover:text-blue-500 hover:scale-110 duration-300 font-custom" onClick={onClick}>
        {text}
    </Link>
);

export default Navbar;
