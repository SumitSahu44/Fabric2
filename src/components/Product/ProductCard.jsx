// File: src/components/Product/ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, name, category }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-80 w-full overflow-hidden bg-gray-100 border-8 border-white shadow-lg transition-all duration-500 group-hover:shadow-2xl">
        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-textile-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-textile-dark px-6 py-2 text-[10px] font-bold uppercase tracking-widest">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold text-textile-dark uppercase tracking-widest">{name}</h3>
        <p className="text-[10px] text-textile-gold font-bold uppercase mt-1 tracking-tighter">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;