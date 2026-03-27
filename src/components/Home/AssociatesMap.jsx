// File: src/components/Home/AssociatesMap.jsx
import React from 'react';
import Map from '../Common/Map';
const AssociatesMap = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

const locations = [
    { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics", x: 300, y: 475 },
    { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk", x: 330, y: 550 },
    { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon", x: 488, y: 505 },
    { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen", x: 625, y: 515 },
    { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade", x: 450, y: 635 },
    { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber", x: 405, y: 755 },
    { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern", x: 475, y: 755 },
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
  <Map />
</div>

      </div>
    </section>
  );
};

export default AssociatesMap;