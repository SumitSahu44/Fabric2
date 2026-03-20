// File: src/components/Layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  // Custom Styles
  const goldColor = "#C5A059";
  const darkColor = "#2D2926";
  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '220px',
    backgroundColor: 'white',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    borderTop: `2px solid ${goldColor}`,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
    zIndex: 1000
  };

  const linkClass = "px-6 py-3 no-underline text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all";

  return (
    <nav style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderBottom: `1px solid ${goldColor}33` }} 
         className="fixed w-full z-[100] px-6 py-4 backdrop-blur-md">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* --- Logo --- */}
        <Link to="/" className="no-underline">
          <h1 style={{ color: darkColor }} className="text-xl font-bold tracking-tighter uppercase m-0">
            PAREKH <span style={{ color: goldColor }}>FABRICS</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold m-0">Ahmedabad • India</p>
        </Link>

        {/* --- Navigation Links --- */}
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
          
          <Link to="/" style={{ color: darkColor }} className="hover:text-[#C5A059] no-underline transition-all">Home</Link>

          {/* Company Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <span style={{ color: darkColor }} className="cursor-pointer flex items-center gap-1 hover:text-[#C5A059]">
              Company
              <svg style={{ width: '12px', transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
            {isCompanyOpen && (
              <div style={dropdownStyle}>
                <Link to="/about" className={linkClass}>About Us</Link>
                <Link to="/career" className={linkClass}>Careers</Link>
                <Link to="/media" className={linkClass}>Media Gallery</Link>
              </div>
            )}
          </div>

          <Link to="/products" style={{ color: darkColor }} className="hover:text-[#C5A059] no-underline transition-all">Products</Link>

          {/* Business Hub Dropdown (Crucial Links) */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setIsBusinessOpen(true)}
            onMouseLeave={() => setIsBusinessOpen(false)}
          >
            <span style={{ color: goldColor, borderBottom: `1px solid ${goldColor}` }} className="cursor-pointer flex items-center gap-1 hover:opacity-80">
              Business Hub
              <svg style={{ width: '12px', transform: isBusinessOpen ? 'rotate(180deg)' : 'rotate(0)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
            {isBusinessOpen && (
              <div style={dropdownStyle}>
                <Link to="/portal" className={linkClass}>Trade Enquiry</Link>
                <Link to="/portal" className={linkClass}>e-Quotation</Link>
                <Link to="/tenders" className={linkClass}>e-Auction</Link>
                <Link to="/tenders" className={linkClass}>Tender & Contract</Link>
                <Link to="/portal" className={linkClass}>Visit Appointment</Link>
              </div>
            )}
          </div>

          <Link to="/contact" style={{ color: darkColor }} className="hover:text-[#C5A059] no-underline transition-all">Contact</Link>
        </div>

        {/* --- CTA Button --- */}
        <Link to="/portal">
          <button style={{ backgroundColor: darkColor, color: 'white' }} className="px-7 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all border-none cursor-pointer shadow-lg">
            Enquire Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;