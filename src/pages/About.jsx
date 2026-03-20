// File: src/pages/About.jsx
import React from 'react';

const About = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const values = [
    { title: "Quality First", desc: "Every meter of fabric undergoes 4-stage quality inspection." },
    { title: "Sustainability", desc: "Sourcing organic cotton and using eco-friendly processing." },
    { title: "Global Reach", desc: "Exporting premium Indian textiles to over 15+ countries." }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* 1. VISION SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div style={{ borderColor: goldColor }} className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Our Factory" 
            />
          </div>
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 text-textile-gold">Our Legacy</h2>
            <h1 style={{ color: darkColor }} className="text-6xl font-light uppercase tracking-tighter leading-none mb-8">
              Decades of <br/> <span className="font-bold italic">Textile Mastery</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Established in 1985 in the heart of Ahmedabad, Parekh Fabrics has grown from a local trading house to a leading manufacturer and exporter of premium cotton solutions.
            </p>
            <p className="text-gray-500 text-sm leading-loose uppercase tracking-widest font-medium">
              We bridge the gap between traditional Indian craftsmanship and modern industrial efficiency.
            </p>
          </div>
        </div>

        {/* 2. CORE VALUES (Cards) */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-12 shadow-xl border-b-4 border-transparent hover:border-textile-gold transition-all group">
              <span style={{ color: goldColor }} className="text-4xl font-mono font-bold opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <h4 style={{ color: darkColor }} className="text-xl font-bold uppercase tracking-tighter mt-4 mb-4">{v.title}</h4>
              <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed font-bold">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. MANUFACTURING STRENGTH */}
        <div style={{ backgroundColor: darkColor }} className="p-16 text-white grid lg:grid-cols-3 gap-16 items-center shadow-2xl relative overflow-hidden">
           <div className="lg:col-span-2">
              <h3 className="text-4xl font-light uppercase tracking-tighter mb-6">Advanced <span style={{ color: goldColor }}>Manufacturing</span> Unit</h3>
              <p className="text-gray-400 text-sm leading-loose max-w-2xl uppercase tracking-widest">
                Our Ahmedabad facility is equipped with high-speed air-jet looms and automated spinning units, ensuring that we produce over 1 million meters of premium fabric every month with zero defects.
              </p>
           </div>
           <div className="text-center border-l border-white/10 py-10">
              <h2 style={{ color: goldColor }} className="text-6xl font-bold mb-2 uppercase">100%</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">In-House Production</p>
           </div>
           {/* Decorative background text */}
           <div className="absolute bottom-[-50px] left-0 text-white/5 text-[15rem] font-black pointer-events-none uppercase">Unit</div>
        </div>

        {/* 4. MANAGEMENT QUOTE */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
           <span className="text-6xl text-textile-gold opacity-30 font-serif">“</span>
           <h3 style={{ color: darkColor }} className="text-3xl font-light italic leading-relaxed -mt-8">
             Our mission is to make Indian cotton the global standard for luxury and durability. We don't just sell fabric; we sell a promise of quality.
           </h3>
           <div style={{ backgroundColor: goldColor }} className="w-16 h-[2px] mx-auto mt-10 mb-4"></div>
           <p className="text-xs font-black uppercase tracking-[0.3em] text-textile-dark">Managing Director, Parekh Fabrics</p>
        </div>

      </div>
    </div>
  );
};

export default About;