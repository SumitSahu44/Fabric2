// File: src/components/Home/AssociatesMap.jsx
import React from 'react';

const AssociatesMap = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const locations = [
    { city: "Ahmedabad", type: "H.O. & Manufacturing", top: "38%", left: "28%" },
    { city: "Mumbai", type: "Export Hub", top: "48%", left: "25%" },
    { city: "Coimbatore", type: "Spinning Unit", top: "78%", left: "38%" },
    { city: "Delhi", type: "Distribution", top: "18%", left: "38%" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info (same as before) */}
        <div>
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Network</h2>
          <h3 style={{ color: darkColor }} className="text-5xl font-light mb-8 uppercase tracking-tighter">
            Our Textile <br/> <span className="font-bold italic">Associates</span>
          </h3>
          <p className="text-gray-500 leading-loose mb-10 text-sm">
            Parekh Fabrics maintains a robust supply chain across India. From high-quality raw cotton sourcing in Gujarat to specialized spinning partners in South India.
          </p>
          
          <div className="space-y-6">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-center gap-6 border-b border-gray-100 pb-4 group cursor-pointer">
                <span style={{ color: goldColor }} className="font-mono font-bold">0{i+1}</span>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-textile-dark group-hover:text-[#C5A059] transition-colors">{loc.city}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{loc.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Proper India Map */}
        {/* Right Side: Image fallback */}
<div className="relative h-[500px] w-full bg-textile-cream rounded-2xl border border-gray-200 overflow-hidden">
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/b/b4/India_outline.svg" 
    alt="India Map Outline"
    className="w-full h-full object-contain p-4"
  />
  {/* Markers same as above – absolute positioning pe rakh sakte ho */}
  {locations.map((loc, i) => (
    <div 
      key={i} 
      className="absolute group w-4 h-4 -translate-x-1/2 -translate-y-1/2"
      style={{ top: loc.top, left: loc.left }}
    >
      <div className="w-4 h-4 bg-[#C5A059] rounded-full animate-ping absolute opacity-60"></div>
      <div className={`w-4 h-4 rounded-full relative z-10 ${loc.city === "Ahmedabad" ? 'bg-[#1A1816]' : 'bg-[#C5A059]'}`}></div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-textile-dark text-white text-[8px] py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
        {loc.city}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AssociatesMap;