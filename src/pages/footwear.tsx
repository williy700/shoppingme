import React, { useState, useEffect } from "react";
import "./footwear.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Footwear: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // ✅ Mock footwear products
    const mockProducts: Product[] = [
      {
        _id: "1",
        name: "White Sneakers",
        price: 60,
        description: "Minimalist sneakers for everyday wear.",
        image: "/images/sneakers.jpg"
      },
      {
        _id: "2",
        name: "Leather Boots",
        price: 85,
        description: "Durable boots crafted from genuine leather.",
        image: "/images/boots.jpg"
      },
      {
        _id: "3",
        name: "Running Shoes",
        price: 70,
        description: "Lightweight performance shoes for workouts.",
        image: "/images/running-shoes.jpg"
      },
      {
        _id: "4",
        name: "Casual Loafers",
        price: 50,
        description: "Easy slip-on loafers for a polished look.",
        image: "/images/loafers.jpg"
      },
      {
        _id: "5",
        name: "Sandals",
        price: 28,
        description: "Breathable open sandals for hot days.",
        image: "/images/sandals.jpg"
      },
      {
        _id: "6",
        name: "High Heels",
        price: 65,
        description: "Elegant heels to elevate your outfit.",
        image: "/images/heels.jpg"
      }
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-page">
      <h2>Footwear Collection</h2>
      <p className="subtitle">Step into comfort and style.</p>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img src={p.image} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <p className="description">{p.description}</p>
            <button className="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footwear;

