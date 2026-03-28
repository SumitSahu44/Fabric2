import React, { useState } from 'react';

const CustomerReviews = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const reviews = [
    {
      name: "Jean-Pierre",
      company: "EcoStyles France",
      text: "Parekh Fabrics has been our reliable partner for organic cotton for over 5 years. Their quality consistency is unmatched in the Indian market.",
      rating: 5,
      date: "Jan 2026"
    },
    {
      name: "Ankit Mehta",
      company: "Mehta Exports Delhi",
      text: "The e-Auction portal is a game changer. It makes bidding transparent and efficient. Highly recommended for bulk procurement.",
      rating: 5,
      date: "Feb 2026"
    },
    {
      name: "Sarah Williams",
      company: "Global Threads UK",
      text: "The turnaround time for custom GSM requests is incredible. Their technical team really understands fabric construction.",
      rating: 4,
      date: "Mar 2026"
    }
  ];

  return (
    <section className="py-24 bg-textile-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">Client Feedback</h2>
        <h3 style={{ color: darkColor }} className="text-4xl font-bold uppercase ">Global <span className="font-light italic">Trust</span></h3>
      </div>

      <div className="flex overflow-x-auto gap-8 px-8 pb-12 scrollbar-hide snap-x">
        {reviews.map((review, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[400px] bg-white p-12 shadow-2xl border-t-4 border-textile-gold snap-center">
             <div className="flex gap-1 mb-8">
               {[...Array(5)].map((_, j) => (
                 <svg key={j} className={`w-3 h-3 ${j < review.rating ? 'text-textile-gold' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               ))}
             </div>
             
             <p className="text-gray-600 text-xs italic leading-relaxed uppercase tracking-widest mb-10">
               "{review.text.includes("e-") 
                 ? <>{review.text.split("e-")[0]}<span className="normal-case lowercase font-bold">e-</span>{review.text.split("e-")[1]}</> 
                 : review.text}"
             </p>
             
             <div className="border-t border-gray-100 pt-8 flex justify-between items-center">
               <div>
                  <h4 className="text-[10px] font-black text-textile-dark uppercase tracking-widest">{review.name}</h4>
                  <p className="text-[9px]  font-bold uppercase  mt-1">{review.company}</p>
               </div>
               <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{review.date}</span>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
