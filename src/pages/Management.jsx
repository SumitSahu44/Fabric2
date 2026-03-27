import React from 'react';

const Management = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const leaders = [
    {
      name: "Rajesh Parekh",
      position: "Founder & Chairman",
      experience: "40+ Years in Textiles",
      bio: "Visionary leader who started Parekh Fabrics with a single loom and a dream to revolutionize the cotton export market in Gujarat.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sanjay Parekh",
      position: "Managing Director",
      experience: "25+ Years in Operations",
      bio: "Expert in supply chain optimization and global trade relations. Under his guidance, Parekh Fabrics expanded to 15+ countries.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Anita Parekh",
      position: "Head of Design & R&D",
      experience: "15+ Years in Fabric Innovation",
      bio: "Leading the research into sustainable cotton blends and modern textile aesthetics. She ensures every meter of fabric meets global standards.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Leadership</h2>
          <h1 style={{ color: darkColor }} className="text-5xl md:text-6xl font-light uppercase tracking-tighter leading-[0.9]">
            The Pillars of <br /> <span className="font-bold">Our Excellence</span>
          </h1>
          <div className="w-20 h-1 bg-textile-gold mx-auto mt-10"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative bg-white p-8 shadow-xl border-t-4 border-transparent hover:border-textile-gold transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-textile-dark/20 group-hover:bg-transparent transition-all"></div>
              </div>
              <h3 className="text-xl font-bold text-textile-dark uppercase tracking-tighter mb-1">{leader.name}</h3>
              <p className="text-[10px] text-textile-gold font-black uppercase tracking-widest mb-4">{leader.position}</p>
              <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mb-6">{leader.experience}</p>
              <p className="text-gray-600 text-xs leading-relaxed uppercase tracking-widest">{leader.bio}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-32 p-12 md:p-24 bg-textile-dark text-white relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl italic mb-8">"Our legacy is woven with threads of integrity, innovation, and an unwavering commitment to the global textile community."</h2>
            <p className="text-textile-gold text-[10px] font-black uppercase tracking-[0.5em]">- The Parekh Philosophy</p>
          </div>
          <div className="absolute top-[-20px] left-[-20px] text-white/5 text-[15rem] font-black pointer-events-none select-none">TRUST</div>
        </div>
      </div>
    </div>
  );
};

export default Management;
