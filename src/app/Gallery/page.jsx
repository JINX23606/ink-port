import React from 'react';
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="relative bg-neutral-200 min-h-screen overflow-x-hidden">
      <h1 className="text-black text-3xl font-bold mt-5 ml-6 font-custom">Photo</h1>
      <p className="text-black text-2xl font-light mt-2 ml-6 w-full max-w-[450px] font-custom">
        I love to take a photo so much, keep it as a good memory.
      </p>

      <div className="container mx-auto p-6 mt-2">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            '16-img.jpg', '20-img.jpg', '03-img.JPG', '04-img.JPG',
            '05-img.jpg', '06-img.jpg', '19-img.jpg', '08-img.jpg',
            '09-img.jpg', '10-img.jpg', '18-img.jpg', '12-img.jpg',
            '13-img.jpg', '14-img.jpg', '15-img.jpg'
          ].map((img, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out">
              <img src={`/img/${img}`} className="w-full h-full object-cover" alt={`Gallery ${index + 1}`} />
              <Image
        src={`/img/${img}`}
        alt={`Gallery ${index + 1}`}
        width={400}      // กำหนดขนาดเพื่อช่วยให้ optimize ได้เต็มที่
        height={300}
        className="w-full h-full object-cover rounded-lg"
      />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
