// File: src/pages/Products.jsx
import React, { useState } from 'react';

const Products = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  // Filter Categories
  const [filter, setFilter] = useState('All');

  const productData = [
    { id: 1, name: "Shankar-6 Raw Cotton", cat: "Raw Cotton", img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71" },
    { id: 2, name: "Combed Cotton Yarn", cat: "Yarn", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633" },
    { id: 3, name: "Organic Twill Fabric", cat: "Finished Fabric", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17" },
    { id: 4, name: "Industrial Canvas", cat: "Finished Fabric", img: "https://images.unsplash.com/photo-1558271823-662425ce5e04" },
    { id: 5, name: "Cotton Grey Cloth", cat: "Raw Cotton", img: "https://images.unsplash.com/photo-1544441893-675973e31985" },
    { id: 6, name: "Melange Yarn", cat: "Yarn", img: "https://images.unsplash.com/photo-1606744881054-ca829d4ee63f" },
  ];

  const categories = ['All', 'Raw Cotton', 'Yarn', 'Finished Fabric'];

  const filteredItems = filter === 'All' 
    ? productData 
    : productData.filter(item => item.cat === filter);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">Parekh Inventory</h2>
          <h1 style={{ color: darkColor }} className="text-6xl font-light uppercase tracking-tighter mb-8">
            Product <span className="font-bold">Gallery</span>
          </h1>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 border-b border-gray-200 pb-6">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{ 
                  color: filter === cat ? goldColor : '#999',
                  borderBottom: filter === cat ? `2px solid ${goldColor}` : '2px solid transparent'
                }}
                className="pb-2 text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer bg-transparent border-none outline-none"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden bg-white shadow-xl border-[15px] border-white transition-all group-hover:shadow-2xl">
                <img 
                  src={`${product.img}?auto=format&fit=crop&q=80&w=800`} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Details */}
                <div className="absolute inset-x-0 bottom-0 bg-white/90 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p style={{ color: goldColor }} className="text-[9px] font-bold uppercase tracking-widest mb-1">{product.cat}</p>
                  <h4 style={{ color: darkColor }} className="text-lg font-bold uppercase tracking-tighter mb-4">{product.name}</h4>
                  <button style={{ backgroundColor: darkColor }} className="w-full py-3 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
              
              {/* Static Info (Visible before hover) */}
              <div className="mt-4 text-center group-hover:opacity-0 transition-opacity">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-textile-dark">{product.name}</h4>
                 <div style={{ backgroundColor: goldColor }} className="w-8 h-[2px] mx-auto mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Items Found */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-400 py-20 uppercase tracking-widest text-xs">No products found in this category.</p>
        )}

      </div>
    </div>
  );
};

export default Products;