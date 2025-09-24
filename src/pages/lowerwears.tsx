// import React, { useState, useEffect } from "react";
// import "./upperwears.css";

// interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
// }

// const Lowerwear: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState("");

//     // ✅ Fetch lowerwear products
//     const fetchLowerwear = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch("http://localhost:5006/api/products/lowerwear");
//             const data = await res.json();
//             setProducts(data);
//         } catch (err) {
//             console.error(err);
//             setMessage("⚠️ Failed to load lowerwear");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchLowerwear();
//     }, []);

//     return (
//         <div className="product-page">
//             <h2>Lowerwear</h2>
//             {loading && <p>Loading...</p>}
//             {message && <p>{message}</p>}
//             <ul>
//                 {products.map((p) => (
//                     <li key={p._id}>
//                         {p.name} - ${p.price} <br />
//                         <small>{p.description}</small>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Lowerwear;

import React, { useState, useEffect } from "react";
import "./lowerwears.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Lowerwear: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // ✅ Mock lowerwear products
    const mockProducts: Product[] = [
      {
        _id: "1",
        name: "Blue Jeans",
        price: 40,
        description: "Classic slim fit denim jeans with a timeless wash.",
        image: "/images/jeans.jpg"
      },
      {
        _id: "2",
        name: "Black Joggers",
        price: 35,
        description: "Soft cotton joggers with adjustable waist for daily comfort.",
        image: "/images/joggers.jpg"
      },
      {
        _id: "3",
        name: "Khaki Shorts",
        price: 25,
        description: "Lightweight summer shorts with a breathable fit.",
        image: "/images/shorts.jpg"
      },
      {
        _id: "4",
        name: "Beige Chinos",
        price: 45,
        description: "Versatile chinos, perfect for office or casual wear.",
        image: "/images/chinos.jpg"
      },
      {
        _id: "5",
        name: "Cargo Pants",
        price: 50,
        description: "Durable cargos with multiple pockets for a utility style.",
        image: "/images/cargo.jpg"
      },
      {
        _id: "6",
        name: "Denim Skirt",
        price: 30,
        description: "Trendy mid-length skirt with a clean cut and modern look.",
        image: "/images/skirt.jpg"
      },
      {
        _id: "7",
        name: "Athletic Leggings",
        price: 28,
        description: "Stretch-fit leggings ideal for workouts and casual outings.",
        image: "/images/leggings.jpg"
      },
      {
        _id: "8",
        name: "Ripped Jeans",
        price: 42,
        description: "Edgy distressed denim for a modern streetwear vibe.",
        image: "/images/ripped-jeans.jpg"
      }
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-page">
      <h2>Lowerwear Collection</h2>
      <p className="subtitle">Find the perfect fit for every occasion.</p>
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

export default Lowerwear;


