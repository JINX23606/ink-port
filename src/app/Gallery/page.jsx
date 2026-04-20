import React from 'react';
import Image from "next/image";

const images = [
  '16-img.jpg', '20-img.jpg', '03-img.JPG', '04-img.JPG',
  '05-img.jpg', '06-img.jpg', '19-img.jpg', '08-img.jpg',
  '09-img.jpg', '10-img.jpg', '18-img.jpg', '12-img.jpg',
  '13-img.jpg', '14-img.jpg', '15-img.jpg'
];

const GalleryPage = () => {
  return (
    <div className="relative bg-neutral-200 min-h-screen overflow-x-hidden">
      <h1 className="text-black text-3xl font-bold mt-5 ml-6 font-custom">Photo</h1>
      <p className="text-black text-2xl font-light mt-2 ml-6 w-full max-w-[450px] font-custom">
        I love to take a photo so much, keep it as a good memory.
      </p>

      <div className="container mx-auto p-6 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={img} // ✅ ใช้ชื่อไฟล์แทน index เพื่อ stable key
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out"
            >
              <div className="relative w-full aspect-square"> {/* ✅ กำหนด aspect ratio ป้องกัน layout shift */}
                <Image
                  src={`/img/${img}`}
                  alt={`Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" // ✅ บอก browser ขนาดที่แท้จริง
                  className="object-cover rounded"
                  loading={index < 4 ? "eager" : "lazy"} // ✅ 4 รูปแรก load ทันที ที่เหลือ lazy
                  priority={index < 4} // ✅ preload รูปแรกๆ
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
