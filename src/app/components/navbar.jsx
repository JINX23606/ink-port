'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // ใช้ไอคอนจาก react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      {/* Menu สำหรับ Desktop */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/about" className="hover:text-blue-500">About</a></li>
        <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
      </ul>

      {/* Hamburger Menu สำหรับ Mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* เมนู Mobile */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li><a href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;