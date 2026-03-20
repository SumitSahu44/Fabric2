// File: src/components/Home/Reviews.jsx
import React from 'react';

const Reviews = () => {
  const reviews = [
    { name: "Rahul Sharma", company: "Surat Textiles", text: "Quality of raw cotton is unmatched. Their delivery timelines are very strict." },
    { name: "Global Exports", company: "Dubai Hub", text: "Parekh Fabrics has been our trusted partner for finished cotton products for 5 years." },
    { name: "Vikas Patel", company: "Ahmedabad Garments", text: "Highly professional management and very transparent e-Auction process." }
  ];

  return (
    <section className="py-24 bg-textile-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-textile-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-center">Global Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="p-10 border border-white/10 hover:border-textile-gold transition-all relative group">
              <span className="text-6xl text-textile-gold absolute -top-4 -left-2 opacity-20 font-serif">“</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">{rev.text}</p>
              <h4 className="text-xs font-bold uppercase tracking-widest">{rev.name}</h4>
              <p className="text-[10px] text-textile-gold uppercase font-medium mt-1">{rev.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;