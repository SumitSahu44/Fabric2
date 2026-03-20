// File: src/components/Forms/BusinessForms.jsx
import React from 'react';

const FormWrapper = ({ title, subtitle, children }) => (
  <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-textile-gold">
    <h3 className="text-2xl font-bold text-textile-dark uppercase tracking-tighter mb-1">{title}</h3>
    <p className="text-xs text-textile-gold font-bold tracking-widest uppercase mb-8">{subtitle}</p>
    <form className="space-y-4">
      {children}
      <button className="w-full bg-textile-dark text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-textile-gold transition-all duration-300 mt-4">
        Submit Request
      </button>
    </form>
  </div>
);

export const TradeEnquiryForm = () => (
  <FormWrapper title="Trade Enquiry" subtitle="Bulk Cotton Supply">
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="Company Name" className="col-span-2 border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm" />
      <input type="text" placeholder="Contact Person" className="border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm" />
      <input type="email" placeholder="Email" className="border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm" />
      <select className="col-span-2 border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm text-gray-500">
        <option>Select Product Variant</option>
        <option>Raw Cotton</option>
        <option>Finished Fabric</option>
        <option>Cotton Yarn</option>
      </select>
      <textarea placeholder="Requirement Details (Quantity, GSM, etc.)" className="col-span-2 border-b border-gray-200 py-3 h-24 outline-none focus:border-textile-gold text-sm"></textarea>
    </div>
  </FormWrapper>
);

export const AppointmentForm = () => (
  <FormWrapper title="Visit Appointment" subtitle="Schedule Factory Visit">
    <input type="text" placeholder="Full Name" className="w-full border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm" />
    <div className="grid grid-cols-2 gap-4">
      <input type="date" className="border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm text-gray-400" />
      <input type="time" className="border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm text-gray-400" />
    </div>
    <select className="w-full border-b border-gray-200 py-3 outline-none focus:border-textile-gold text-sm text-gray-500">
      <option>Purpose of Visit</option>
      <option>Quality Inspection</option>
      <option>Order Finalization</option>
      <option>New Partnership</option>
    </select>
  </FormWrapper>
);