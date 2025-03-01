import React from 'react';

const GalleryPage = () => {
  return (
    <div className="relative bg-neutral-200 min-h-screen overflow-x-hiddens">
      <p className="text-black text-2xl py-3 w-[850px] mb-3 ml-6 font-bold font-custom">Photo</p>
      <p className="text-black text-2xl mt-2 w-[850px] mb-1 ml-6 font-light font-custom">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
