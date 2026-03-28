import React from 'react';

const Blog = () => {
  const goldColor = "#C5A059";
  const darkColor = "#1A1816";

  const posts = [
    {
      title: "The Rise of Organic Cotton in Indian Textile Industry",
      date: "20 March 2026",
      author: "Aditi Sharma",
      category: "Market Trends",
      excerpt: "The global shift towards sustainability is reshaping the cotton farming landscape in Gujarat. We explore how Parekh Fabrics is leading this change...",
      image: "https://images.unsplash.com/photo-1771098403201-8d0d32e2a062?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwUmlzZSUyMG9mJTIwT3JnYW5pYyUyMGZhYnJpJTIwY2luJTIwSW5kaWFuJTIwVGV4dGlsZSUyMEluZHVzdHJ5fGVufDB8fDB8fHww"
    },
    {
      title: "Denim Trends for 2026: Texture and Durability",
      date: "12 March 2026",
      author: "Sanjay Parekh",
      category: "Fabric Innovation",
      excerpt: "As fashion cycles accelerate, the demand for long-lasting, high-texture denim is at an all-time high. Discover our latest weave techniques...",
      image: "https://images.unsplash.com/photo-1611331347660-9a4e98549588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVuaW0lMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Understanding GSM: A Guide for Bulk Buyers",
      date: "01 March 2026",
      author: "Technical Team",
      category: "B2B Education",
      excerpt: "Grams per Square Meter (GSM) is the most critical metric in fabric quality assessment. Here's a breakdown of how to choose the right GSM for your needs...",
      image: "https://plus.unsplash.com/premium_photo-1663011041653-5145434b69f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVsayUyMGJ1eWVyJTIwdGV4dGlsZSUyMGIyYnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-20 px-8 text-textile-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 style={{ color: goldColor }} className="text-[10px] font-black uppercase tracking-[0.5em] mb-6">Textile Journal</h2>
          <h1 style={{ color: darkColor }} className="text-5xl md:text-6xl font-light uppercase  leading-[0.9]">
            Insights & <br /> <span className="font-bold">Innovations</span>
          </h1>
          <div className="w-20 h-1 bg-textile-gold mx-auto mt-10"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-700">
              <div className="aspect-video overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4">
                  <span className="bg-textile-gold text-white text-[8px] font-black uppercase tracking-widest px-3 py-1">{post.category}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px]  font-bold uppercase tracking-widest">{post.date}</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span className="text-[9px]  font-bold uppercase tracking-widest">By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold uppercase  mb-6 group-hover:text-textile-gold transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-[11px] leading-relaxed uppercase tracking-widest mb-8 line-clamp-3">{post.excerpt}</p>
                <button className="text-[10px] font-black border-b border-textile-dark pb-1 uppercase tracking-widest hover:text-textile-gold hover:border-textile-gold transition-all">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
