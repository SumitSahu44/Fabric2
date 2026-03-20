import React from 'react';
import IndiaMap from '../components/Common/IndiaMap';

const Associates = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const regions = [
    {
      name: "West India",
      city: "Ahmedabad & Surat",
      description: "Our primary manufacturing and processing hub. Over 45 associates handling spinning and weaving operations.",
      partners: 45
    },
    {
      name: "North India",
      city: "Ludhiana & Panipat",
      description: "Home textile and knitwear specialists. Strategic partners for specialized winter cotton processing.",
      partners: 12
    },
    {
      name: "South India",
      city: "Tiruppur & Coimbatore",
      description: "The spinning heart of India. Our associates here ensure the highest quality yarn for our premium fabrics.",
      partners: 22
    },
    {
      name: "East India",
      city: "Kolkata Hub",
      description: "Regional distribution center and quality control unit for the Eastern export markets.",
      partners: 8
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Our Footprint</h2>
            <h1 style={{ color: darkColor }} className="text-5xl md:text-6xl font-light uppercase tracking-tighter leading-[0.9]">
              Textile Associates <br/> <span className="font-bold">Across India</span>
            </h1>
          </div>
          <div className="pb-4">
            <p className="text-gray-600 text-[11px] leading-relaxed uppercase tracking-widest max-w-md">
              With a robust network of over 85+ strategic partners, Parekh Fabrics ensures seamless production and supply across every corner of the country.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map Column */}
          <div className="lg:col-span-2">
            <IndiaMap />
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border-r-4 border-transparent hover:border-textile-gold">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-lg font-bold text-textile-dark uppercase tracking-tighter">{region.name}</h3>
                   <span className="text-[10px] font-black text-textile-gold bg-textile-cream px-3 py-1 uppercase">{region.partners} Units</span>
                </div>
                <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-4">{region.city}</p>
                <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-widest">{region.description}</p>
              </div>
            ))}

            {/* CTA Box */}
            <div className="bg-textile-dark p-8 text-white mt-12">
               <h4 className="text-sm font-bold uppercase tracking-tighter mb-4">Become an Associate</h4>
               <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-8">Join the Parekh network and scale your textile operations globally.</p>
               <button className="w-full border border-textile-gold text-textile-gold py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-textile-gold hover:text-white transition-all">Download Partnership PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associates;
