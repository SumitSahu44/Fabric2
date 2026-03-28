// File: src/pages/Career.jsx
import React from 'react';

const Career = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const jobs = [
    { title: "Textile Engineer", location: "Ahmedabad Unit", type: "Full-Time" },
    { title: "B2B Sales Manager", location: "Pan-India", type: "Commission Based" },
    { title: "Quality Controller", location: "Factory Site", type: "Full-Time" },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-center">Join Our Legacy</h2>
          <h1 style={{ color: darkColor }} className="text-6xl font-light text-center uppercase ">
            Build the Future of <br/> <span className="font-bold">Textiles</span>
          </h1>
        </header>

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-8 shadow-xl flex justify-between items-center border-l-4 border-transparent hover:border-[#C5A059] transition-all group">
              <div>
                <h4 className="text-xl font-bold text-textile-dark uppercase tracking-tight">{job.title}</h4>
                <p className="text-[10px]  font-bold uppercase tracking-widest mt-1">{job.location} • {job.type}</p>
              </div>
              <button style={{ backgroundColor: darkColor }} className="text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-textile-dark text-white text-center">
          <h3 className="text-2xl font-light mb-4">Don't see a fit?</h3>
          <p className=" text-sm mb-8 uppercase tracking-widest">Send your CV to <span className="text-textile-gold">hr@parekhfabrics.com</span></p>
          <button style={{ border: `1px solid ${goldColor}`, color: goldColor }} className="px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition">General Application</button>
        </div>
      </div>
    </div>
  );
};

export default Career;