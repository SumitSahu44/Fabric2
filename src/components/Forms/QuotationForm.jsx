// File: src/components/Forms/QuotationForm.jsx
import React, { useState } from 'react';

const QuotationForm = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  // State for calculation
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  const inputStyle = {
    width: '100%',
    padding: '12px 0',
    border: 'none',
    borderBottom: '1px solid #EEE',
    fontSize: '13px',
    outline: 'none',
    marginBottom: '20px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase'
  };

  return (
    <div className="bg-white p-10 shadow-2xl border-t-4" style={{ borderColor: goldColor }}>
      <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2" style={{ color: darkColor }}>
        <span className="normal-case lowercase">e-</span>Quotation <span style={{ color: goldColor }}>Generator</span>
      </h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-10">Instant B2B Price Estimate</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Select Fabric Variant</label>
        <select 
          style={inputStyle} 
          onChange={(e) => setProduct(e.target.value)}
          className="cursor-pointer font-bold text-textile-dark"
        >
          <option value="">Choose Quality...</option>
          <option value="Raw Cotton">Raw Cotton (Shankar-6)</option>
          <option value="Denim">Premium Denim Fabric</option>
          <option value="Yarn">Combed Cotton Yarn</option>
        </select>

        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Quantity (Meters / Kg)</label>
        <input 
          type="number" 
          placeholder="e.g. 5000" 
          style={inputStyle} 
          onChange={(e) => setQuantity(e.target.value)}
          className="font-bold text-textile-dark"
        />

        {/* Calculation Summary Box */}
        {product && quantity > 0 && (
          <div className="bg-textile-cream p-6 mb-8 border border-textile-gold/20 animate-fade-in">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Item:</span>
              <span className="text-[10px] font-black text-textile-dark uppercase">{product}</span>
            </div>
            <div className="flex justify-between mb-4 border-b border-gray-100 pb-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Volume:</span>
              <span className="text-[10px] font-black text-textile-dark uppercase">{quantity} units</span>
            </div>
            <p className="text-[9px] text-textile-gold italic leading-tight">
              * This is an automated estimate. Final price will be shared via official email from Ahmedabad HO.
            </p>
          </div>
        )}

        <button 
          style={{ backgroundColor: darkColor }}
          className="w-full text-white py-4 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-textile-gold transition-all shadow-lg"
        >
          Generate Official Quote
        </button>
      </form>
    </div>
  );
};

export default QuotationForm;