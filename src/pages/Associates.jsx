import React from 'react';
import IndiaMap from '../components/Common/Map'
const Associates = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const regions = [
    {
      id: 1,
      name: "Parekh Fabrics",
      city: "Ahmedabad",
      description: "Core fabric manufacturing unit handling large-scale cotton production.",
      partners: 45
    },
    {
      id: 2,
      name: "Parekh Silk",
      city: "Surat",
      description: "Specialized in silk processing and premium textile finishing.",
      partners: 30
    },
    {
      id: 3,
      name: "Parekh Rayon",
      city: "Raipur",
      description: "Rayon production and synthetic fiber processing hub.",
      partners: 20
    },
    {
      id: 4,
      name: "Parekh Linen",
      city: "Kolkata",
      description: "Head unit for linen production, design, and quality control.",
      partners: 25
    },
    {
      id: 5,
      name: "Parekh e-Trade Market",
      city: "Hyderabad",
      description: "Digital trading hub connecting suppliers and buyers across India.",
      partners: 15
    },
    {
      id: 6,
      name: "Parekh Chamber of Textile",
      city: "Bangalore",
      description: "Industry collaboration and textile innovation center.",
      partners: 10
    },
    {
      id: 7,
      name: "Parekh Southern Polyfabrics",
      city: "Chennai",
      description: "Southern region polyfabric manufacturing and supply unit.",
      partners: 18
    }
  ];
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Our Footprint</h2>
            <h1 style={{ color: darkColor }} className="text-5xl md:text-6xl font-light uppercase  leading-[0.9]">
              Textile Associates <br /> <span className="font-bold">Across India</span>
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
                  <h3 className="text-lg font-bold text-textile-dark uppercase ">
                    {region.name.includes("e-") 
                      ? <>{region.name.split("e-")[0]}<span className="normal-case lowercase">e-</span>{region.name.split("e-")[1]}</>
                      : region.name}
                  </h3>
                  <span className="text-[10px] font-black text-textile-gold bg-textile-cream px-3 py-1 uppercase">{region.partners} Units</span>
                </div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-4">{region.city}</p>
                <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-widest">{region.description}</p>
              </div>
            ))}

            {/* CTA Box */}
            <div className="bg-textile-dark p-8 text-white mt-12">
              <h4 className="text-sm font-bold uppercase  mb-4">Become an Associate</h4>
              <p className="text-[10px]  uppercase tracking-widest mb-8">Join the Parekh network and scale your textile operations globally.</p>
              <button className="w-full border border-textile-gold text-textile-gold py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-textile-gold hover:text-white transition-all">Download Partnership PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associates;
