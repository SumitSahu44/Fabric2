import React from 'react';
import CustomerReviews from '../components/Home/CustomerReviews';

const CustomerReview = () => {
  return (
    <div className="bg-textile-cream min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <h1 className="text-6xl font-light text-textile-dark uppercase tracking-tighter">
            Customer <br/> <span className="font-bold border-b-4 border-textile-gold">Reviews</span>
          </h1>
          <p className="mt-8 text-gray-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
            See what our global partners have to say about our premium textiles and seamless <span className="normal-case lowercase font-bold">e-</span>trade services.
          </p>
        </div>
        
        <CustomerReviews />
      </div>
    </div>
  );
};

export default CustomerReview;
