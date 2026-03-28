import React from 'react';

const Auction = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const auctions = [
    { id: "AUC/6D/2026/12", title: "Premium Shankar-6 Cotton (Lot A)", currentBid: "₹62,500/Candy", end: "2 hrs 15 mins", bidders: 14 },
    { id: "AUC/6D/2026/13", title: "Combed Yarn 40s (5000 KG)", currentBid: "₹285/KG", end: "5 hrs 30 mins", bidders: 8 },
    { id: "AUC/6D/2026/11", title: "Organic Cotton Fiber - Lot B", currentBid: "₹65,000/Candy", end: "Closed", bidders: 21 },
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Live Bidding</h2>
            <h1 style={{ color: darkColor }} className="text-5xl font-light uppercase "><span className="normal-case lowercase">e-</span>Auction <span className="font-bold">Portal</span></h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-2 border border-gray-100 shadow-sm text-center">
              <p className="text-[8px]  uppercase font-black mb-1">Live Auctions</p>
              <p className="text-lg font-bold text-green-600">02</p>
            </div>
            <button style={{ backgroundColor: darkColor }} className="text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all">KYC Verification</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {auctions.map((item, index) => (
            <div key={index} className="bg-white shadow-xl border-t-4 hover:shadow-2xl transition-all duration-500" style={{ borderColor: item.end === 'Closed' ? '#EEE' : goldColor }}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-gray-500 font-bold">{item.id}</span>
                  <span className={`text-[8px] font-black uppercase px-2 py-1 ${item.end === 'Closed' ? 'bg-gray-100 ' : 'bg-red-50 text-red-600 animate-pulse'}`}>
                    {item.end === 'Closed' ? 'Ended' : 'Live'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-textile-dark uppercase  mb-4 h-12">{item.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-[10px]  uppercase font-bold tracking-widest">Current Bid:</span>
                    <span className="text-[11px] text-textile-dark font-black">{item.currentBid}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-[10px]  uppercase font-bold tracking-widest">Time Left:</span>
                    <span className="text-[11px] text-textile-gold font-bold">{item.end}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px]  uppercase font-bold tracking-widest">Active Bidders:</span>
                    <span className="text-[11px] text-textile-dark font-bold">{item.bidders}</span>
                  </div>
                </div>

                <button 
                  disabled={item.end === 'Closed'}
                  className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                    item.end === 'Closed' ? 'bg-gray-100  cursor-not-allowed' : 'bg-textile-dark text-white hover:bg-textile-gold'
                  }`}
                >
                  {item.end === 'Closed' ? 'Auction Ended' : 'Place Bid'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-textile-cream border border-textile-gold/20 text-center">
           <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Note: All bidders must have a verified B2B GST account to participate in live auctions.</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;