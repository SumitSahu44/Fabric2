// File: src/components/Home/MediaGallery.jsx
import React from 'react';

const MediaGallery = () => {
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71", title: "Raw Cotton Storage" },
    { id: 2, url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633", title: "Spinning Unit" },
    { id: 3, url: "https://images.unsplash.com/photo-1558271823-662425ce5e04", title: "Quality Check" },
    { id: 4, url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17", title: "Finished Fabric" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-light text-textile-dark uppercase ">Media <span className="font-bold">Gallery</span></h2>
          <button className="text-xs font-bold text-textile-gold border-b border-textile-gold tracking-widest uppercase">Visit Ahmedabad Unit</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
          {photos.map((photo, index) => (
            <div key={photo.id} className={`relative overflow-hidden group ${index === 0 ? 'md:col-span-2' : ''}`}>
              <img 
                src={`${photo.url}?auto=format&fit=crop&q=80&w=800`} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;