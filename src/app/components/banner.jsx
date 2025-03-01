import React from 'react';
import TypingEffect from './TypingEffect';

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/ink_about.JPG')" }}>
            {/* Layer สีดำโปร่งแสง */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* เนื้อหาหลัก */}
            <div className="relative z-10 text-white px-6 text-center md:text-left md:ml-[100px] md:mt-[200px] max-w-screen-lg">
                <h1 className="text-4xl md:text-5xl font-bold font-custom">Kitthapas Poolwong</h1>
                <h2 className="text-2xl md:text-3xl mt-4 font-bold font-custom">
                    I am a <TypingEffect />
                </h2>

                {/* Social Media Icons */}
                <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <a href="https://github.com/JINX23606" className="text-gray-300 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/lnkrit.p/" className="text-gray-300 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
