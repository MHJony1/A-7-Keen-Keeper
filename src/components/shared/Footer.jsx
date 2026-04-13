import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1D4F39] text-white py-8 px-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo and Tagline section */}
        <div className="text-center mb-8 ">
          <h1 className="text-6xl font-bold text-white leading-tight mb-2 tracking-tight">Keen<span className=" font-semibold">Keeper</span></h1>
          <p className="text-md font-semibold mt-3 text-[#B0BFB8] ">
           Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-2">
          <p className="text-xl font-medium text-white mb-3">Social Links</p>
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="bg-white rounded-full p-2.5 flex items-center justify-center hover:opacity-90 transition">
              <FaInstagram size={18} className="text-[#1D4F39]" />
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="bg-white rounded-full p-2.5 flex items-center justify-center hover:opacity-90 transition">
              <FaFacebookF size={18} className="text-[#1D4F39]" />
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="bg-white rounded-full p-2.5 flex items-center justify-center hover:opacity-90 transition">
              <FaTwitter size={18} className="text-[#1D4F39]" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Section */}
      <div className="max-w-7xl mx-auto border-t border-[#356651] mt-7 pt-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 text-xs text-[#B0BFB8]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white transition text-sm">Terms of Service</a>
            <a href="#" className="hover:text-white transition text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;