import React from 'react'

const page = () => {
  return (
    <div className='relative  bg-cover bg-center h-screen bg-nautral-200'>
        <p className='text-black text-2xl mt-5 w-[850px] mb-3 ml-6 font-bold font-custom'>Photo</p>
        <p className='text-black text-2xl mt-2 w-[850px] mb-1 ml-6 font-light font-custom'>I love to take a photo so much keep it as a good memories</p>
        <div className='container mx-auto p-6 mt-2 md:grid '>
            <div className='grid grid-cols-4 gap-4 '>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/16-img.jpg" className='w-full h-full ' alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/20-img.jpg" className='w-full h-full'alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/03-img.jpg" className='w-full h-full'alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/04-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/05-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/06-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/19-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/08-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/09-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/10-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/18-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/12-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/13-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/14-img.jpg" alt="" />
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer duration-300 ease-out'>
                    <img src="/img/15-img.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page