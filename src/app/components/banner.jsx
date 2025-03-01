import React from 'react';
import TypingEffect from './TypingEffect';

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('/ink_about.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto relative z-10 py-8 text-white ml-[100px] mt-[200px]">
                <h1 className="text-5xl font-bold font-custom">Kitthapas Poolwong</h1>
                <h2 className="text-3xl mt-4 font-bold font-custom">I am a <TypingEffect /></h2>
                <div className="mt-4 "></div>
                    <a href="https://github.com/JINX23606" className="text-gray-300 hover:text-blue-300 mx-2 " target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/lnkrit.p/" className="text-gray-300 hover:text-blue-300 mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
        
    );
};

export default Banner;