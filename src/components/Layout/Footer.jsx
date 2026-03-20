// File: src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Custom Colors (Image-based)
  const goldColor = "#C5A059";
  const darkColor = "#1A1816"; // Thoda zyada premium dark
  const grayText = "#A0A0A0";

  const footerStyle = {
    backgroundColor: darkColor,
    color: 'white',
    paddingTop: '80px',
    paddingBottom: '40px',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
  };

  const linkStyle = "hover:text-[#C5A059] transition-colors cursor-pointer no-underline text-gray-400 text-[11px] uppercase tracking-widest block mb-4";

  return (
    <footer style={footerStyle}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        {/* --- 1. BRAND INFO --- */}
        <div className="col-span-1">
          <h2 style={{ letterSpacing: '-0.05em' }} className="text-2xl font-bold mb-4 uppercase">
            PAREKH <span style={{ color: goldColor }}>FABRICS</span>
          </h2>
          <p style={{ color: grayText }} className="text-[10px] leading-relaxed uppercase tracking-[0.2em] font-medium">
            Manufacturers & Bulk Suppliers of <br/> 
            Cotton Fabrics & Raw Products <br/> 
            Since 1985.
          </p>
          <div className="mt-8 flex gap-4">
             {/* Social Circles */}
             <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ border: '1px solid rgba(255,255,255,0.1)' }} className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer transition-all no-underline text-white">FB</a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ border: '1px solid rgba(255,255,255,0.1)' }} className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer transition-all no-underline text-white">LI</a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ border: '1px solid rgba(255,255,255,0.1)' }} className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer transition-all no-underline text-white">IG</a>
          </div>
        </div>

        {/* --- 2. BUSINESS HUB LINKS --- */}
        <div>
          <h4 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-8">Business Hub</h4>
          <Link to="/portal" className={linkStyle}>Trade Enquiry</Link>
          <Link to="/portal" className={linkStyle}>e-Quotation</Link>
          <Link to="/auction" className={linkStyle}>e-Auction Portal</Link>
          <Link to="/tenders" className={linkStyle}>Official Tenders</Link>
          <Link to="/circulars" className={linkStyle}>Official Circulars</Link>
        </div>

        {/* --- 3. QUICK LINKS --- */}
        <div>
          <h4 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-8">Quick Links</h4>
          <Link to="/products" className={linkStyle}>Product Gallery</Link>
          <Link to="/management" className={linkStyle}>Our Management</Link>
          <Link to="/associates" className={linkStyle}>Our Associates</Link>
          <Link to="/blog" className={linkStyle}>Textile Blog</Link>
        </div>

        {/* --- 4. CONTACT INFO --- */}
        <div>
          <h4 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-8">Contact Ahmedabad</h4>
          <div style={{ color: grayText }} className="text-[11px] space-y-4 tracking-wider leading-relaxed">
            <p>6, PAREKH FABRICS,<br/>AHMEDABAD, GUJARAT, INDIA.</p>
            <p className="font-bold text-white">W: <span className="underline">www.parekhfabrics.com</span></p>
            <p>E: info@parekhfabrics.com</p>
            <p className="text-white font-bold">T: +91 79 XXXX XXXX</p>
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT SECTION --- */}
      <div className="max-w-7xl mx-auto px-8 mt-12 flex flex-col md:row justify-between items-center text-[9px] font-bold tracking-[0.4em] text-gray-600">
        <p>© 2026 PAREKH FABRICS. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0 opacity-50">DESIGNED FOR PREMIUM B2B TEXTILES</p>
      </div>
    </footer>
  );
};

export default Footer;