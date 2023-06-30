import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base">
            We provide comprehensive car services to address all your automotive needs. Our team of experts is ready to assist you with maintenance, repairs, and more.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p className="text-sm md:text-base">
            Email: info@example.com<br/>
            Phone: +91-6369684049<br/>
            Address: ramalinga nagar 2nd steet virugambakkam 
          </p>
          <a href="https://goo.gl/maps/SduGTaeSJcv2hCDdA">
          <button className="text-sm md:text-base text-white bg-blue-600 hover:bg-blue-800 py-2 px-4 mt-4 rounded">
            Locate Us
          </button>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;