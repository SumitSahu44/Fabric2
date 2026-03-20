// File: src/pages/MediaGallery.jsx
import React from 'react';

const MediaGallery = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const media = [
    { type: 'image', url: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg', title: 'Factory Floor' },
    { type: 'image', url: 'https://images.pexels.com/photos/6045283/pexels-photo-6045283.jpeg', title: 'Raw Cotton Quality' },
    { type: 'image', url: 'https://plus.unsplash.com/premium_photo-1682148883506-c1ee71fd2809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRleHRpbGUlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D', title: 'Manufacturing Process', placeholder: '' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1718117059204-8380b0706219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRleHRpbGUlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D', title: 'Yarn Spinning' },
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
                className="w-full h-full object-cover  transition-all duration-1000 group-hover:scale-105"
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