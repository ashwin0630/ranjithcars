import React from 'react';
import hero from '../assets/hero.png';
import imgbg from '../assets/hero-bg.png';
import logo from '../assets/rc.jpg';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919790930403';
    const message = 'Hello, I would like to get in touch about a car!';
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col md:flex-row h-[400px] w-full">
      <div className="h-[100%] w-full md:w-[50%] flex items-center">

        <div className="ml-3">
        <img src={logo} alt="Logo" className="h-[50%] w-[20%] mb-4" />
          <h1 className="text-6xl font-custom text-bold pb-8">
            Find and buy a car quick and super easy!
          </h1>
          <p className='font-antique'>Streamline your purchase experience with our effortless booking process</p>
          <button
            onClick={handleWhatsAppClick}
            className="m-3 p-2 mt-10 rounded-3xl bg-blue-600 hover:bg-blue-800 text-white transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="bg-white h-[100%] w-full md:w-[50%] flex items-center justify-center relative">
        <div className="absolute inset-0 z-0 w-[100%] h-[100%] right-0 ml-24 mb-24">
          <img src={imgbg} alt="" className="w-full h-full object-cover sm:object-contain" />
        </div>
        <img src={hero} alt="hero" className="max-w-xs md:max-w-xl relative z-10" />
      </div>
    </div>
  );
};

export default Hero;
