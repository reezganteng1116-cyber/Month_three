import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid #333",
        borderRadius: "12px",
        padding: "16px",
        margin: "10px",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
