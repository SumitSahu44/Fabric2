import React from 'react';

const Tender = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const tenders = [
    { id: "PF/TND/2026/08", title: "Bulk Raw Cotton - 500 Metric Tons", status: "Live", end: "25 March 2026", category: "Raw Material" },
    { id: "PF/TND/2026/09", title: "Finished Denim Fabric - 50k Meters", status: "Upcoming", end: "02 April 2026", category: "Finished Product" },
    { id: "PF/TND/2026/07", title: "Cotton Yarn Export Quality", status: "Closed", end: "15 March 2026", category: "Yarn" },
    { id: "PF/TND/2026/10", title: "Logistics & Transport Contract - Gujarat Region", status: "Live", end: "30 March 2026", category: "Services" },
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Official Portal</h2>
            <h1 style={{ color: darkColor }} className="text-5xl font-light uppercase ">B2B <span className="font-bold">Tenders</span></h1>
          </div>
          <button style={{ backgroundColor: darkColor }} className="text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all">Download Guidelines</button>
        </div>

        <div className="bg-white shadow-2xl overflow-hidden border-t-4" style={{ borderColor: goldColor }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold uppercase tracking-widest ">
                <th className="p-6 border-b">Tender ID</th>
                <th className="p-6 border-b">Description</th>
                <th className="p-6 border-b">Status</th>
                <th className="p-6 border-b">Deadline</th>
                <th className="p-6 border-b text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-mono text-xs text-textile-gold font-bold">{item.id}</td>
                  <td className="p-6">
                    <p className="text-sm font-bold text-textile-dark uppercase m-0">{item.title}</p>
                    <span className="text-[10px]  uppercase tracking-widest font-bold">{item.category}</span>
                  </td>
                  <td className="p-6">
                    <span className={`text-[9px] font-bold uppercase px-3 py-1 rounded-full ${
                      item.status === 'Live' ? 'bg-green-100 text-green-700 animate-pulse' : 
                      item.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 '
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6 text-xs text-gray-500 font-bold uppercase">{item.end}</td>
                  <td className="p-6 text-right">
                    <button className="text-[10px] font-black underline uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors">
                      {item.status === 'Closed' ? 'View Results' : 'Download Tender Doc'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tender;
