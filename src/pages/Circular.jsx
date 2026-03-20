import React from 'react';

const Circular = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const circulars = [
    {
      id: "CIR-2026-004",
      date: "15 March 2026",
      title: "Revised Export Norms for Cotton Fiber",
      category: "Export Policy",
      summary: "Important updates regarding the new GST compliance for international cotton shipments starting April 2026."
    },
    {
      id: "CIR-2026-003",
      date: "02 March 2026",
      title: "Summer Quality Inspection Schedule",
      category: "Quality Assurance",
      summary: "Announcement of the bi-annual quality audit for all processing units in Ahmedabad and Surat."
    },
    {
      id: "CIR-2026-002",
      date: "20 February 2026",
      title: "Sustainable Sourcing Initiative",
      category: "Corporate Social Responsibility",
      summary: "Guidelines for local farmers regarding the adoption of organic fertilizers for the upcoming season."
    },
    {
      id: "CIR-2026-001",
      date: "05 January 2026",
      title: "New Warehouse Protocols",
      category: "Logistics",
      summary: "Updated fire safety and inventory management protocols for the main GIDC warehouse."
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Official Notices</h2>
          <h1 style={{ color: darkColor }} className="text-5xl md:text-6xl font-light uppercase tracking-tighter leading-[0.9]">
            Company <br/> <span className="font-bold">Circulars</span>
          </h1>
          <div className="w-20 h-1 bg-textile-gold mt-10"></div>
        </div>

        <div className="grid gap-8">
          {circulars.map((item, index) => (
            <div key={index} className="group bg-white p-10 shadow-lg border-l-4 border-textile-gold hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] font-black bg-textile-dark text-white px-3 py-1 uppercase tracking-widest">{item.category}</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-textile-dark uppercase tracking-tighter mb-4 group-hover:text-textile-gold transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-[11px] leading-relaxed uppercase tracking-widest max-w-2xl">{item.summary}</p>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-[10px] font-mono text-gray-300 font-bold mb-6">{item.id}</span>
                <button className="text-[10px] font-black border-b border-textile-dark pb-1 uppercase tracking-widest hover:text-textile-gold hover:border-textile-gold transition-all">Download PDF</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circular;
