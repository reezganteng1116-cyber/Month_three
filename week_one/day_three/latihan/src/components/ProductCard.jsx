import React from "react";

function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        margin: "10px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
       }}
    >
      <h3>{productName}</h3>
      <p>Harga: Rp {price}</p>
      <p>Stok: {stock}</p>
      <p style={{ color: isAvailable ? "green" : "red", fontWeight: "bold" }}>
        {isAvailable ? "Tersedia" : "Habis"}
      </p>
    </div>
  );
}

ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false,
};

export default ProductCard;
