import React, { useState } from 'react';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';
import logoImage from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, to: '/' },
    { name: 'Timeline', icon: <Clock size={18} />, to: '/timeline' },
    { name: 'Stats', icon: <BarChart3 size={18} />, to: '/stats' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-3 md:px-8">
      <div className="max-w-370 mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <NavLink to="/" className="flex items-center">
          <img 
            src={logoImage} 
            alt="KeenKeeper Logo" 
            className="h-8 w-auto object-contain"
          />
        </NavLink>

        {/* Right Side: Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === '/'} 
              className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive 
                ? 'bg-[#2d5a5a] text-white' 
                : 'text-slate-500 hover:text-[#2d5a5a] hover:bg-slate-50'
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden pb-4 space-y-2 border-t border-gray-50 mt-2 pt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive 
                ? 'bg-[#2d5a5a] text-white' 
                : 'text-slate-500 hover:text-[#2d5a5a] hover:bg-slate-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;