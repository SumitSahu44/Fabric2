import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  const mobileDropdown = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px'
  };

  const linkClass = "px-6 py-3 no-underline text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50";

  return (
    <nav
      style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderBottom: `1px solid ${goldColor}33` }}
      className="fixed w-full z-[100] px-4 py-4 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 no-underline">

          {/* Logo Icon */}
          <div
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl text-white font-bold text-xl shadow-md"
            style={{ backgroundColor: goldColor }}
          >
            P
          </div>

          {/* Text Content */}
          <div className="flex flex-col leading-tight">

            {/* Brand Name */}
            <h1
              style={{ color: darkColor }}
              className="text-xl font-bold uppercase m-0 leading-none"
            >
              PAREKH{" "}
              <span style={{ color: goldColor }} className="font-light">
                FABRICS
              </span>
            </h1>

            {/* Location */}
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em]  font-semibold m-0">
              Ahmedabad, India
            </p>

          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">

          <Link to="/" style={{ color: darkColor }} className="hover:text-[#C5A059]">Home</Link>

          {/* Company */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <span style={{ color: darkColor }} className="cursor-pointer flex items-center gap-2 hover:text-[#C5A059]">
              Company
              <svg
                className="transition-transform duration-300"
                style={{ width: '14px', height: '14px', transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>

            {isCompanyOpen && (
              <div style={dropdownStyle}>
                <Link to="/about" className={linkClass}>About Us</Link>
                <Link to="/management" className={linkClass}>Our Management</Link>
                <Link to="/associates" className={linkClass}>Our Associates</Link>
                <Link to="/customer-review" className={linkClass}>Customer Review</Link>
                <Link to="/career" className={linkClass}>Careers</Link>
                <Link to="/media" className={linkClass}>Media Gallery</Link>
              </div>
            )}
          </div>

          <Link to="/products" style={{ color: darkColor }}>Products</Link>
          <Link to="/blog" style={{ color: darkColor }}>Blog</Link>

          {/* Business */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsBusinessOpen(true)}
            onMouseLeave={() => setIsBusinessOpen(false)}
          >
            <span style={{ color: goldColor, borderBottom: `1px solid ${goldColor}` }} className="cursor-pointer flex items-center gap-2">
              Business Hub
              <svg
                className="transition-transform duration-300"
                style={{ width: '14px', height: '14px', transform: isBusinessOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>

            {isBusinessOpen && (
              <div style={dropdownStyle}>
                <Link to="/portal" className={linkClass}><span className="normal-case lowercase">e-</span>Quotation</Link>
                <Link to="/auction" className={linkClass}><span className="normal-case lowercase">e-</span>Auction</Link>
                <Link to="/tenders" className={linkClass}>Tender & Contract </Link>
                <Link to="/circulars" className={linkClass}>Circulars</Link>
                <Link to="/portal" className={linkClass}>Visit Appointment</Link>
              </div>
            )}
          </div>

          <Link to="/contact" style={{ color: darkColor }}>Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/portal">
            <button style={{ backgroundColor: darkColor }} className="px-6 py-2 text-white text-xs">
              Enquire Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white mt-4 shadow-md flex flex-col text-[11px] font-bold uppercase">

          <Link to="/" className="p-3">Home</Link>

          {/* Company Mobile */}
          <div>
            <div onClick={() => setIsCompanyOpen(!isCompanyOpen)} className="p-3 cursor-pointer">
              Company
            </div>
            {isCompanyOpen && (
              <div style={mobileDropdown}>
                <Link to="/about" className="p-2">About Us</Link>
                <Link to="/management" className="p-2">Our Management</Link>
                <Link to="/associates" className="p-2">Our Associates</Link>
                <Link to="/customer-review" className="p-2">Customer Review</Link>
              </div>
            )}
          </div>

          <Link to="/products" className="p-3">Products</Link>
          <Link to="/blog" className="p-3">Blog</Link>

          {/* Business Mobile */}
          <div>
            <div onClick={() => setIsBusinessOpen(!isBusinessOpen)} className="p-3 cursor-pointer">
              Business Hub
            </div>
            {isBusinessOpen && (
              <div style={mobileDropdown}>
                <Link to="/portal" className="p-2"><span className="normal-case lowercase">e-</span>Quotation</Link>
                <Link to="/auction" className="p-2"><span className="normal-case lowercase">e-</span>Auction</Link>
                <Link to="/tenders" className="p-2">Tenders</Link>
                <Link to="/circulars" className="p-2">Circulars</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="p-3">Contact</Link>

          <Link to="/portal" className="p-3">
            <button className="w-full bg-black text-white py-2">Enquire Now</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;