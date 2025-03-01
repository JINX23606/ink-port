import React from 'react'

const about = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/ink_2.JPG')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 py-8 text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 font-custom">About Me 👦</h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl w-full font-custom">
                Hi, I am Kitthapas Poolwong, an Economics student at Kasetsart University with a passion for web development. <br /> This website is my very first project, built from scratch using Next.js and Tailwind CSS.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-yellow-400 font-custom">My Journey 🎓</h2>
            <p className="mt-2 text-base sm:text-lg md:text-xl w-full font-custom">
                Despite coming from an economics background, I was drawn to web development and decided to start from zero. Instead of spending time on social media, I dedicated myself to learning how to build websites. Through persistence and hands-on practice, I’ve gained valuable skills in modern web technologies.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-yellow-400 font-custom">Why This Project ? 💡</h2>
            <p className="mt-2 text-base sm:text-lg md:text-xl w-full font-custom">
                This website is more than just a project—it’s a testament to self-discipline, continuous learning, and the ability to build something from the ground up. I believe that combining economics with technology can open up new opportunities, and this is just the beginning.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-yellow-400 font-custom">What’s Next ? 👾</h2>
            <p className="mt-2 text-base sm:text-lg md:text-xl w-full font-custom">
                I’m eager to keep improving, explore new technologies, and apply my knowledge in innovative ways. If you're on a similar journey or have any feedback, feel free to connect! Let’s build something great! 🚀
            </p>
        </div>
    </div>
  );
}

export default about;
