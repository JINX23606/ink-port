import React from 'react';

const Projects = () => {
  return (
    <div className="relative bg-neutral-200 min-h-screen overflow-x-hidden">
      <h1 className="text-black text-3xl font-bold mt-5 ml-6 font-custom">Projects</h1>
      <p className="text-black text-2xl font-light mt-2 mx-auto md:ml-6 w-full max-w-[450px] text-center md:text-left font-custom">
  This is my projects which I've done as a University Student
</p>


      <div className="container mx-auto p-6 mt-2">
        {/* 🔹 เปลี่ยน grid layout ให้ responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-2 font-custom">Simple Regression Model Using Python</h2>
            <p className="text-gray-700 font-custom">
              Predicted Value and Actual Value Ploted can input the x and y value in the matrix <br />
              for the predicted
            </p>
            <a
              href="https://github.com/JINX23606/Numeric-Project.git"
              className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg hover:scale-105 hover:bg-blue-700 inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <img src="/figure_1.png" alt="Project 1" className="mt-3" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-2 font-custom">Demand Supply Curve Using Manim Library in Python</h2>
            <p className="text-gray-700 font-custom">
              This project show how supply curve shift when the shock happened price has increased from P1 to P2 and
              quantity has decreased from Q1 to Q2
            </p>
            <a
              href="https://github.com/JINX23606/Manim-Supply-Curve.git"
              className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg hover:scale-105 hover:bg-blue-700 inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <img src="/figure_3.png" alt="Project 2" className="mt-3" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-2 font-custom">Nonparametric Project</h2>
            <p className="text-gray-700 font-custom">
              This project explains that credit rating agencies have the same standard to score the firms in the stock
              market
            </p>
            <a
              href="https://drive.google.com/drive/folders/1i2JD7Yefq5WJpNen6t5Y34Xup4-R_XlR?usp=sharing"
              className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg hover:scale-105 hover:bg-blue-700 inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Document
            </a>
            <img src="/figure_2.PNG" alt="Project 3" className="mt-3" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-2 font-custom">Heal Jai Project</h2>
            <p className="text-gray-700 font-custom">
              "Heal Jai" means to cure your heart by doing anything that makes you happy for a week. I edited this video
              using CapCut.
            </p>
            <iframe
              width="640"
              height="360"
              className="w-full h-auto mt-3"
              src="https://www.youtube.com/embed/Qx7ZDJIRHYs?si=fTimJSPvwanWfMwt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
            <h2 className="text-2xl font-bold mb-2 font-custom">Project Title: Sleep Quality Prediction</h2>
            <p className="text-gray-700 font-custom">
            This project aims to develop a predictive model for sleep quality based on various 
            lifestyle and health-related factors. The dataset includes attributes such as sleep 
            duration, stress level, daily steps, occupation, and heart rate. A regression model 
            was trained to estimate sleep quality, achieving a Root Mean Square Error (RMSE) of 0.2696, 
            indicating a fairly accurate prediction.
            </p>
            <a
              href="https://github.com/JINX23606/R-Project.git"
              className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-lg hover:scale-105 hover:bg-blue-700 inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <img src="/figure_3.png" alt="Project 2" className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
