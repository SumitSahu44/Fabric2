// File: src/pages/Media.jsx
import React from 'react';

const Media = () => {
  const mediaItems = [
    { title: "Manufacturing Unit", img: "https://images.unsplash.com/photo-1558271823-662425ce5e04" },
    { title: "Raw Cotton Testing", img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71" },
    { id: 3, title: "Export Packaging", img: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e" },
    { id: 4, title: "Yarn Quality", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633" },
  ];

  return (
    <div className="bg-textile-cream min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h1 className="text-6xl font-light text-textile-dark uppercase ">Media <br/> <span className="font-bold border-b-4 border-textile-gold">Gallery</span></h1>
          <p className="text-xs  font-bold uppercase tracking-[0.4em] mt-4">Parekh Fabrics Factory & Products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mediaItems.map((item, index) => (
            <div key={index} className="group relative h-[400px] overflow-hidden bg-white shadow-2xl border-[12px] border-white">
              <img 
                src={`${item.img}?auto=format&fit=crop&q=80&w=1000`} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-bold uppercase ">{item.title}</h4>
                  <p className="text-textile-gold text-[10px] font-bold uppercase tracking-widest mt-2">Unit 0{index + 1} - Ahmedabad</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;