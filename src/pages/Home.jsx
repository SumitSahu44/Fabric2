// File: src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import AssociatesMap from '../components/Home/AssociatesMap';
import CustomerReviews from '../components/Home/CustomerReviews';

const Home = () => {
  // Static colors for consistent B2B branding
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const featuredProducts = [
    { id: 1, name: "Premium Raw Cotton", category: "Raw Material", img: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Organic Cotton Yarn", category: "Spinning", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Woven Fabric", category: "Finished Textile", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-textile-cream min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-left">
          <h2 style={{ color: goldColor }} className="font-bold tracking-[0.5em] uppercase text-[10px] mb-6 flex items-center gap-3">
            <span style={{ backgroundColor: goldColor }} className="w-10 h-[1px]"></span> Since 1985
          </h2>
          <h1 className="text-6xl md:text-8xl font-light text-textile-dark leading-[0.9] mb-8">
            Pure <span className="font-bold italic">Cotton</span> <br /> 
            <span style={{ color: goldColor }}>Excellence.</span>
          </h1>
          <p className="text-gray-500 mb-10 max-w-md text-lg leading-relaxed border-l-4 border-textile-gold/30 pl-6">
            Ahmedabad's premier B2B textile hub specializing in high-grade raw cotton and finished fabrics for global markets.
          </p>
          <div className="flex flex-wrap gap-6 relative z-10">
  {/* Explore Portfolio Button - Added 'inline-block' and forced background */}
  <Link 
    to="/products" 
    className="inline-block bg-[#0f172a] text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl no-underline"
    style={{ minWidth: '200px', textAlign: 'center' }}
  >
    Explore Portfolio
  </Link>

  {/* e-Quotation Button */}
  <Link 
    to="/portal" 
    className="inline-block border border-slate-900 text-slate-900 px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all no-underline"
    style={{ minWidth: '200px', textAlign: 'center' }}
  >
    e-Quotation
  </Link>
</div>
        </div>

        {/* Decorative Image Box */}
        <div className="relative group">
          <div style={{ borderColor: `${goldColor}33` }} className="absolute -inset-4 border translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
          <div className="relative h-[600px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/36226281/pexels-photo-36226281.jpeg" 
              alt="Cotton Texture" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-textile-dark/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-10 bg-white/95 p-8 shadow-2xl border-l-4 border-textile-gold">
               <p className="text-textile-dark font-black tracking-[0.3em] uppercase text-xs leading-tight m-0">
                 Verified <br/> Quality <br/> <span style={{ color: goldColor }}>Standards</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section style={{ backgroundColor: darkColor }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Meters / Year", val: "10M+" },
            { label: "Global Partners", val: "250+" },
            { label: "Years Experience", val: "35+" },
            { label: "Quality Variants", val: "100+" },
          ].map((stat, i) => (
            <div key={i} className="border-r border-white/10 last:border-0">
              <h4 style={{ color: goldColor }} className="text-3xl font-bold mb-1">{stat.val}</h4>
              <p className="text-white/40 text-[10px] uppercase tracking-widest m-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 style={{ color: goldColor }} className="font-bold tracking-[0.4em] uppercase text-xs mb-3">B2B Inventory</h2>
            <h3 className="text-5xl font-light text-textile-dark">Core <span className="font-bold italic underline decoration-textile-gold underline-offset-8">Categories</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} image={product.img} name={product.name} category={product.category} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASSOCIATES MAP */}
      <AssociatesMap />

      {/* 5. CUSTOMER REVIEWS */}
      <CustomerReviews />

      {/* 5. MANAGEMENT & VISION */}
      <section className="py-32 bg-textile-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-64 bg-gray-200 mt-12 overflow-hidden shadow-xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Director" />
                </div>
                <div className="h-64 bg-gray-300 overflow-hidden shadow-xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="CEO" />
                </div>
             </div>
             <div style={{ backgroundColor: `${goldColor}33` }} className="absolute -bottom-6 -right-6 w-48 h-48 -z-10 rounded-full blur-3xl"></div>
          </div>
          <div>
            <h2 style={{ color: goldColor }} className="font-bold tracking-[0.3em] uppercase text-xs mb-4">Leadership</h2>
            <h3 className="text-4xl font-light text-textile-dark mb-6 leading-tight">Our <span className="font-bold italic">Management</span> & Vision</h3>
            <p className="text-gray-600 mb-8 leading-relaxed italic text-lg">
              "Building trust through quality since 1985. Our association with farmers and textile units across India allows us to offer unmatched variety in cotton products."
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-6 border-b border-gray-200 pb-4 group">
                  <span style={{ color: goldColor }} className="font-bold text-xl font-mono">01.</span>
                  <p className="text-xs font-black uppercase tracking-widest text-textile-dark group-hover:text-textile-gold transition-colors m-0">Ahmedabad Manufacturing Hub</p>
               </div>
               <div className="flex items-center gap-6 border-b border-gray-200 pb-4 group">
                  <span style={{ color: goldColor }} className="font-bold text-xl font-mono">02.</span>
                  <p className="text-xs font-black uppercase tracking-widest text-textile-dark group-hover:text-textile-gold transition-colors m-0">Pan-India Textile Associates</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEDIA & CAREERS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div style={{ backgroundColor: darkColor }} className="p-16 text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">Join Our Team</h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed uppercase tracking-widest">Empowering the next generation of textile engineers and business leaders.</p>
              <Link to="/career" style={{ backgroundColor: goldColor }} className="inline-block text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-textile-dark transition-all no-underline">
                View Openings
              </Link>
            </div>
            <div className="absolute right-[-30px] bottom-[-30px] text-white/5 text-[12rem] font-bold rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">JOBS</div>
          </div>

          <div>
            <h3 style={{ color: goldColor }} className="text-xs font-bold uppercase tracking-[0.4em] mb-8">Market Updates</h3>
            <div className="space-y-10">
              {[
                { title: 'The Rise of Organic Cotton in Indian Textile Industry', link: '/blog' },
                { title: 'Denim Trends for 2026: Texture and Durability', link: '/blog' },
                { title: 'Understanding GSM: A Guide for Bulk Buyers', link: '/blog' }
              ].map((blog, i) => (
                <Link key={i} to={blog.link} className="block group cursor-pointer border-b border-gray-100 pb-6 no-underline">
                  <h4 className="text-xl font-bold text-textile-dark group-hover:text-textile-gold transition-colors mb-2 uppercase tracking-tight">{blog.title}</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">March 2026</span>
                    <span style={{ backgroundColor: goldColor }} className="w-1 h-1 rounded-full"></span>
                    <span className="text-[10px] text-textile-gold uppercase font-bold">5 Min Read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;