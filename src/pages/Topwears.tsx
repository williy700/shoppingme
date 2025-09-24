import React, { useState, useEffect } from "react";
import "./Topwears.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Topwear: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // ✅ Mock topwear products
    const mockProducts: Product[] = [
      {
        _id: "1",
        name: "Classic White T-Shirt",
        price: 20,
        description: "Soft cotton tee for a clean casual look.",
        image: "/images/white-tshirt.jpg"
      },
      {
        _id: "2",
        name: "Denim Jacket",
        price: 55,
        description: "Timeless denim jacket for layering.",
        image: "/images/denim-jacket.jpg"
      },
      {
        _id: "3",
        name: "Black Hoodie",
        price: 45,
        description: "Comfortable fleece hoodie with front pocket.",
        image: "/images/hoodie.jpg"
      },
      {
        _id: "4",
        name: "Checked Shirt",
        price: 38,
        description: "Casual button-down shirt in classic plaid.",
        image: "/images/checked-shirt.jpg"
      },
      {
        _id: "5",
        name: "Polo Shirt",
        price: 30,
        description: "Smart casual polo with breathable fabric.",
        image: "/images/polo.jpg"
      },
      {
        _id: "6",
        name: "Oversized Sweater",
        price: 50,
        description: "Warm knit sweater for chilly evenings.",
        image: "/images/sweater.jpg"
      }
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-page">
      <h2>Topwear Collection</h2>
      <p className="subtitle">From casual tees to stylish jackets.</p>
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

export default Topwear;





