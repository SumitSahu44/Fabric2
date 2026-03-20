// File: src/pages/MediaGallery.jsx
import React from 'react';

const MediaGallery = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const media = [
    { type: 'image', url: 'https://images.unsplash.com/photo-1558271823-662425ce5e04', title: 'Factory Floor' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71', title: 'Raw Cotton Quality' },
    { type: 'video', url: '#', title: 'Manufacturing Process', placeholder: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633', title: 'Yarn Spinning' },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Visual Tour</h2>
          <h1 style={{ color: darkColor }} className="text-5xl font-light uppercase tracking-tighter">Media <span className="font-bold italic">Showcase</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {media.map((item, index) => (
            <div key={index} className="relative group overflow-hidden h-[400px] bg-gray-100 shadow-xl border-[10px] border-white transition-all hover:shadow-2xl">
              <img 
                src={item.type === 'video' ? item.placeholder : `${item.url}?auto=format&fit=crop&q=80&w=1000`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Parekh Fabrics Units</p>
                <h4 className="text-white text-2xl font-bold uppercase">{item.title}</h4>
                {item.type === 'video' && <span className="text-textile-gold text-xs font-bold mt-2 underline cursor-pointer uppercase">Play Video</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;