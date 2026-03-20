// File: src/pages/BusinessPortal.jsx
import React from 'react';
import QuotationForm from '../components/Forms/QuotationForm';
import { TradeEnquiryForm, AppointmentForm } from '../components/Forms/BusinessForms';

const BusinessPortal = () => {
  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Instant Tools */}
          <div className="lg:col-span-1 space-y-12">
            <QuotationForm />
            <AppointmentForm />
          </div>

          {/* Right Column: Detailed Enquiry */}
          <div className="lg:col-span-2">
            <TradeEnquiryForm />
            
            {/* Added B2B Info Box */}
            <div className="mt-12 p-12 bg-textile-dark text-white relative overflow-hidden">
               <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Bulk Procurement <span className="text-textile-gold">Guide</span></h3>
               <p className="text-gray-400 text-xs leading-relaxed mb-8 uppercase tracking-widest">
                 Minimum Order Quantity (MOQ) starts from 500 Meters for Finished Fabric and 1000 KG for Raw Cotton. 
                 GST 5% will be applicable as per Gujarat Textile Norms.
               </p>
               <button className="border border-textile-gold text-textile-gold px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-textile-gold hover:text-white transition-all">Download Price List 2026</button>
               <div className="absolute top-[-20px] right-[-20px] text-white/5 text-[10rem] font-black pointer-events-none">B2B</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessPortal;