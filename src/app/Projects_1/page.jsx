import React from 'react'

const projects = () => {
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen bg-nautral-200">
            <h1 className='text-black text-3xl font-bold mt-5 w-[850px] mb-1 ml-6 font-custom'>Projects</h1>
            <p className='text-black text-2xl font-light mt-2 w-[850px] mb-1 ml-6 w-[500px] font-custom'>This is my projects which I've do when I as a University Student</p>
            <div className='container mx-auto p-6 mt-2 md:grid '>
            <div className='grid grid-cols-4 gap-4 '>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <h2 className='text-2xl font-bold mb-2 font-custom'>Simple Regression Model Using Python</h2>
                    <p className='text-grey-700 font-custom'>Predicted Value and Actual Value Ploted can input the x and y value in the matrix <br />for the predicted</p>
                    <a href="https://github.com/JINX23606/Numeric-Project.git" className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 inline-block text-center" target="_blank" rel="noopener noreferrer">View Code</a>

                    <img src="/figure_1.png" alt="Project 1" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <h2 className='text-2xl font-bold mb-2 font-custom'>Demand Supply Curve Using Manim Library in Python</h2>
                    <p className='text-grey-700 font-custom'>This project show how supply curve shift when the shock happened price has increase from P1 to P2 and quantity <br />has decreased from Q1 to Q2</p>
                    <a href="https://github.com/JINX23606/Manim-Supply-Curve.git" className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 inline-block text-center mb-2" target="_blank" rel="noopener noreferrer font-custom">View Code</a>
                    <img src="/figure_3.png" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <h2 className='text-2xl font-bold mb-2 font-custom'>Nonparametric Project</h2>
                    <p className='text-grey-700 font-custom'>This project explain that credit rating agencies have the same standard to scored the firms in stock market</p>
                    <a href="https://drive.google.com/drive/folders/1i2JD7Yefq5WJpNen6t5Y34Xup4-R_XlR?usp=sharing" className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 inline-block text-center mb-2" target="_blank" rel="noopener noreferrer">View Full Document</a>
                    <img src="/figure_2.PNG" alt="Project 3" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <h2 className='text-2xl font-bold mb-2 font-custom'>Heal Jai Project</h2>
                    <p className='text-grey-700 font-custom'>This project about "Heal Jai" mean to cure your heart by do anything that make you happy for a week by do that consistently and I'm as a editor of this video by using capcut</p>
                    <iframe width="640" height="360" className="w-auto h-auto mt-3"src="https://www.youtube.com/embed/Qx7ZDJIRHYs?si=fTimJSPvwanWfMwt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                </div>
            
            </div>
        </div>
        
    );
}

export default projects


