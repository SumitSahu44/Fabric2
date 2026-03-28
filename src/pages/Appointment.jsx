// File: src/pages/Appointment.jsx
import React from 'react';

const Appointment = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const inputStyle = {
    width: '100%',
    padding: '15px 0',
    border: 'none',
    borderBottom: '1px solid #E5E5E5',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    outline: 'none',
    marginBottom: '30px',
    backgroundColor: 'transparent'
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        
        {/* Left Side: Text */}
        <div>
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Plan Your Visit</h2>
          <h1 style={{ color: darkColor }} className="text-6xl font-light uppercase  mb-8 leading-[0.9]">
            Factory <br/> <span className="font-bold italic text-textile-gold">Appointment</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            Visit our Ahmedabad manufacturing unit to inspect quality variants of raw cotton and finished fabrics. 
            Prior appointment is mandatory for business associates.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                <span style={{ color: goldColor }}>ADDR:</span> 6, Parekh Fabrics, Ahmedabad, Gujarat.
             </div>
             <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                <span style={{ color: goldColor }}>HOURS:</span> Mon-Sat | 10:00 AM - 06:00 PM
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#F9F7F2] p-12 shadow-2xl">
          <form>
            <input type="text" placeholder="Full Name" style={inputStyle} />
            <input type="text" placeholder="Company Name" style={inputStyle} />
            <div className="grid grid-cols-2 gap-8">
              <input type="date" style={inputStyle} />
              <input type="time" style={inputStyle} />
            </div>
            <select style={inputStyle} className="cursor-pointer">
              <option>Purpose: Quality Inspection</option>
              <option>Purpose: Bulk Order Finalization</option>
              <option>Purpose: General Inquiry</option>
            </select>
            <textarea placeholder="Additional Requirements" style={{...inputStyle, height: '80px'}}></textarea>
            
            <button 
              style={{ backgroundColor: darkColor, color: 'white' }} 
              className="w-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all"
            >
              Request Appointment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Appointment;