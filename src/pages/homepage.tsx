import React from "react";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SHOPPINGme</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </nav>

      {/* Hero / Latest Outfit */}
      <header className="hero">
        <h1>Discover the Latest Outfits</h1>
        <p>Trendy styles curated just for you.</p>
      </header>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <a href="/Topwears" className="category-card">
            <img src="/images/topwear-category.jpg" alt="Topwears" />
            <span>Topwears</span>
          </a>
          <a href="/lowerwears" className="category-card">
            <img src="/images/lowerwear-category.jpg" alt="Lowerwears" />
            <span>Lowerwears</span>
          </a>
          <a href="/footwears" className="category-card">
            <img src="/images/footwear-category.jpg" alt="Footwears" />
            <span>Footwears</span>
          </a>
        </div>
      </section>

      {/* Latest Outfits Grid */}
      <section className="outfits">
        <h2>Latest Arrivals</h2>
        <div className="outfit-grid">
          <div className="outfit-card">
            <img src="/images/outfit1.jpg" alt="Outfit 1" />
            <p>Casual Denim Fit</p>
          </div>
          <div className="outfit-card">
            <img src="/images/outfit2.jpg" alt="Outfit 2" />
            <p>Streetwear Joggers</p>
          </div>
          <div className="outfit-card">
            <img src="/images/outfit3.jpg" alt="Outfit 3" />
            <p>Summer Shorts Vibe</p>
          </div>
          <div className="outfit-card">
            <img src="/images/outfit4.jpg" alt="Outfit 4" />
            <p>Classic Sneakers</p>
          </div>
          <div className="outfit-card">
            <img src="/images/outfit1.jpg" alt="Outfit 1" />
            <p>Casual Denim Fit</p>
          </div>
          <div className="outfit-card">
            <img src="/images/outfit1.jpg" alt="Outfit 1" />
            <p>Casual Denim Fit</p>
          </div>          
        </div>
      </section>

      {/* Current Trending Outfits */}
      <section className="outfits trending">
        <h2>Current Trending Outfits</h2>
        <div className="outfit-grid">
          <div className="outfit-card">
            <img src="/images/trend1.jpg" alt="Trend A" />
            <p>Urban Streetwear</p>
          </div>
          <div className="outfit-card">
            <img src="/images/trend2.jpg" alt="Trend B" />
            <p>Sporty Casual</p>
          </div>
          <div className="outfit-card">
            <img src="/images/trend3.jpg" alt="Trend C" />
            <p>Weekend Essentials</p>
          </div>
          <div className="outfit-card">
            <img src="/images/trend4.jpg" alt="Trend D" />
            <p>Night Out Look</p>
          </div>
           <div className="outfit-card">
            <img src="/images/trend1.jpg" alt="Trend A" />
            <p>Urban Streetwear</p>
          </div>                              
        </div>
      </section>

      {/* Past Trending Outfits */}
      <section className="outfits past">
        <h2>Past Trending Outfits</h2>
        <div className="outfit-grid">
          <div className="outfit-card">
            <img src="/images/past1.jpg" alt="Past A" />
            <p>Classic Winter Coat</p>
          </div>
          <div className="outfit-card">
            <img src="/images/past2.jpg" alt="Past B" />
            <p>Retro 90s Fit</p>
          </div>
          <div className="outfit-card">
            <img src="/images/past3.jpg" alt="Past C" />
            <p>Summer Linen Style</p>
          </div>
          <div className="outfit-card">
            <img src="/images/past4.jpg" alt="Past D" />
            <p>Minimalist Black & White</p>
          </div>
          <div className="outfit-card">
            <img src="/images/past5.jpg" alt="Past E" />
            <p>Chic Office Wear</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;







