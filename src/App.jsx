import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingActions from './components/Common/FloatingActions';

// Page Components
import Home from './pages/Home';
import Products from './pages/Products';
import BusinessPortal from './pages/BusinessPortal';
import Auction from './pages/Auction';
import Career from './pages/Career';
import MediaGallery from './pages/MediaGallery';
import Contact from './pages/Contact';
import About from './pages/About';
import Management from './pages/Management';
import Circular from './pages/Circular';
import Blog from './pages/Blog';
import Associates from './pages/Associates';
import Tender from './pages/Tender';
import CustomerReview from './pages/CustomerReview';

// CSS Import
import './index.css';

// --- Scroll to Top Logic ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- 404 Page (Not Found) ---
const NotFound = () => (
  <div className="pt-60 pb-40 text-center min-h-screen bg-[#FDFBF7]">
    <h1 className="text-9xl font-black text-textile-gold opacity-20">404</h1>
    <p className="text-xs font-bold uppercase tracking-[0.5em] text-textile-dark -mt-10">Page Not Found</p>
    <Link to="/" className="inline-block mt-10 border-b-2 border-textile-dark pb-1 text-[10px] font-black uppercase tracking-widest hover:text-textile-gold hover:border-textile-gold transition-all no-underline">Back to Home</Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App selection:bg-[#C5A059] selection:text-[#1A1816]">
        <ScrollToTop />
        
        <Navbar />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<BusinessPortal />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tenders" element={<Tender />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/circulars" element={<Circular />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/associates" element={<Associates />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customer-review" element={<CustomerReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;