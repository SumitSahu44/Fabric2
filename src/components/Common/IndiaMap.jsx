import React from 'react';

const IndiaMap = () => {
  const goldColor = "#C5A059";
  
  // Simplified India SVG Map points for major textile hubs
  const hubs = [
    { name: "Ahmedabad", x: "25%", y: "45%", type: "HO & Factory" },
    { name: "Surat", x: "27%", y: "52%", type: "Processing" },
    { name: "Mumbai", x: "28%", y: "60%", type: "Export Hub" },
    { name: "Coimbatore", x: "35%", y: "85%", type: "Spinning" },
    { name: "Ludhiana", x: "32%", y: "20%", type: "Knitwear" },
    { name: "Tiruppur", x: "37%", y: "88%", type: "Garments" },
    { name: "Panipat", x: "35%", y: "28%", type: "Home Textiles" },
    { name: "Kolkata", x: "75%", y: "50%", type: "Jute & Cotton" }
  ];

  return (
    <div className="relative w-full h-[600px] bg-white shadow-2xl overflow-hidden border border-gray-100 group">
      {/* Background SVG - Abstract India Shape */}
      <svg viewBox="0 0 800 1000" className="absolute inset-0 w-full h-full opacity-5 grayscale group-hover:grayscale-0 transition-all duration-[3000ms]">
         <path 
           d="M310,100 L380,80 L420,100 L450,150 L460,200 L480,250 L500,300 L550,320 L600,350 L650,400 L700,450 L750,550 L780,650 L700,750 L600,850 L500,900 L450,950 L400,980 L350,950 L300,900 L250,850 L200,800 L180,750 L150,650 L120,550 L100,450 L120,350 L150,250 L200,200 L250,150 Z" 
           fill={goldColor}
         />
      </svg>

      {/* Interactive Hub Points */}
      {hubs.map((hub, i) => (
        <div 
          key={i} 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/dot"
          style={{ left: hub.x, top: hub.y }}
        >
          {/* Pulse Effect */}
          <div className="absolute inset-0 w-8 h-8 bg-textile-gold/30 rounded-full animate-ping group-hover/dot:bg-textile-dark/30"></div>
          
          {/* The Dot */}
          <div className="w-3 h-3 bg-textile-gold border-2 border-white rounded-full group-hover/dot:bg-textile-dark transition-colors relative z-10 shadow-lg"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-textile-dark text-white p-4 whitespace-nowrap opacity-0 group-hover/dot:opacity-100 transition-all scale-75 group-hover/dot:scale-100 pointer-events-none shadow-2xl border-t-2 border-textile-gold">
            <h4 className="text-[10px] font-black uppercase tracking-widest">{hub.name}</h4>
            <p className="text-[8px] text-textile-gold font-bold uppercase tracking-tighter">{hub.type}</p>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-6 border border-gray-100">
        <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Network Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-textile-gold rounded-full"></div>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Active Associate</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-textile-dark rounded-full"></div>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Processing Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
