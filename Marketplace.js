import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Industrial Drill Machine",
    price: "₹5,000",
    seller: "ABC Tools Pvt Ltd",
    location: "Delhi",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Wholesale Cotton Fabric",
    price: "₹200/kg",
    seller: "XYZ Textiles",
    location: "Mumbai",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Stainless Steel Utensils",
    price: "₹3,500/set",
    seller: "SteelPro Manufacturers",
    location: "Jaipur",
    image: "https://via.placeholder.com/150",
  },
];

const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const handleInquiry = (product) => {
    setSelectedProduct(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry sent for ${selectedProduct.name} by ${buyerName}`);
    setBuyerName("");
    setBuyerEmail("");
    setSelectedProduct(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>B2B Marketplace</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Seller:</strong> {product.seller}</p>
            <p><strong>Location:</strong> {product.location}</p>
            <button
              onClick={() => handleInquiry(product)}
              style={{
                background: "#007bff",
                color: "#fff",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Inquire Now
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <h2>Inquiry for {selectedProduct.name}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={buyerEmail}
              onChange={(e) => setBuyerEmail(e.target.value)}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#28a745",
                color: "#fff",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
