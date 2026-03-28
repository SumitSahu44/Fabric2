// File: src/pages/Contact.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
const Contact = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const inputStyle = {
    width: '100%',
    padding: '16px 0',
    border: 'none',
    borderBottom: '1px solid #E5E5E5',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    outline: 'none',
    marginBottom: '32px',
    backgroundColor: 'transparent',
    fontWeight: '600'
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* --- LEFT SIDE: Contact Info --- */}
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Get In Touch</h2>
            <h1 style={{ color: darkColor }} className="text-6xl md:text-7xl font-light uppercase tracking-tighter leading-[0.9] mb-12">
              Connect with <br/> <span className="font-bold">Our Team</span>
            </h1>
            
            <div className="space-y-12">
              {/* Office Address */}
              <div>
                <h4 style={{ color: goldColor }} className="text-[11px] font-black uppercase tracking-widest mb-4">Ahmedabad Headquarters</h4>
                <p className="text-gray-600 uppercase tracking-widest text-xs leading-loose font-medium">
                  6, Parekh Fabrics, <br/>
                  GIDC Textile Hub, Ahmedabad, <br/>
                  Gujarat - 380001, India.
                </p>
              </div>

              {/* Business Enquiries */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 style={{ color: goldColor }} className="text-[11px] font-black uppercase tracking-widest mb-4">Direct Sales</h4>
                  <p className="text-textile-dark font-bold text-sm tracking-widest">+91 79 XXXX XXXX</p>
                  <p className="text-gray-400 text-[10px] uppercase font-bold mt-1 tracking-widest">sales@parekhfabrics.com</p>
                </div>
                <div>
                  <h4 style={{ color: goldColor }} className="text-[11px] font-black uppercase tracking-widest mb-4">General Support</h4>
                  <p className="text-textile-dark font-bold text-sm tracking-widest">info@parekhfabrics.com</p>
                  <p className="text-gray-400 text-[10px] uppercase font-bold mt-1 tracking-widest">Available: 10AM - 6PM IST</p>
                </div>
              </div>

              {/* Social Presence */}
            <div className="flex gap-6 -mt-10 text-xl">
  <a href="#">
    <FaLinkedin className="text-textile-dark hover:text-textile-gold transition-all" />
  </a>

  <a href="#">
    <FaInstagram className="text-textile-dark hover:text-textile-gold transition-all" />
  </a>

  <a href="#">
    <FaFacebook className="text-textile-dark hover:text-textile-gold transition-all" />
  </a>
</div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="bg-white p-12 shadow-2xl relative">
            <div style={{ backgroundColor: goldColor }} className="absolute top-0 left-0 w-full h-1"></div>
            <h3 style={{ color: darkColor }} className="text-2xl font-bold uppercase tracking-tighter mb-10">Send a Message</h3>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-x-10">
                <input type="text" placeholder="Full Name" style={inputStyle} required />
                <input type="email" placeholder="Email Address" style={inputStyle} required />
              </div>
              <input type="text" placeholder="Company Name" style={inputStyle} required />
              <select style={inputStyle} className="cursor-pointer appearance-none">
                <option>Subject: Trade Enquiry</option>
                <option>Subject: Quality Assurance</option>
                <option>Subject: Global Export</option>
                <option>Subject: Other</option>
              </select>
              <textarea placeholder="Your Detailed Requirement" style={{ ...inputStyle, height: '100px', resize: 'none' }} required></textarea>
              
              <button 
                type="submit"
                style={{ backgroundColor: darkColor }}
                className="w-full text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-textile-gold transition-all duration-500 shadow-xl"
              >
                Send Inquiry
              </button>
            </form>
          </div>

        </div>

        {/* --- GOOGLE MAP SECTION --- */}
        <div className="mt-32 h-[450px] bg-gray-200 shadow-inner relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.3824816654!2d72.50762499616258!3d23.02018176378415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11674a0984!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Office Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 group-hover:border-transparent transition-all"></div>
        </div>

      </div>
    </div>
  );
};

export default Contact;