import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onScrollToForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollToForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className={`font-heading font-extrabold text-2xl tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
          NOVA<span className="text-red-600">TERRA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="tel:+34965000000" className={`flex items-center font-semibold ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'} hover:text-red-600 transition-colors`}>
            <Phone className="w-4 h-4 mr-2" />
            965 123 456
          </a>
          <button 
            onClick={onScrollToForm}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Valoración Gratuita
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col items-center space-y-4 animate-fade-in-down">
           <a href="tel:+34965000000" className="flex items-center text-lg font-semibold text-gray-800">
            <Phone className="w-5 h-5 mr-2 text-red-600" />
            965 123 456
          </a>
          <button 
            onClick={() => {
              onScrollToForm();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md"
          >
            Valoración Gratuita
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;