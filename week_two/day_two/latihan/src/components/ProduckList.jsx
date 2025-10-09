import React, { useState } from "react";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ]);

  const handleList = () => {
    if (products.length === 0) {
      return "Tidak ada produk yang ditampilkan";
    }
    return null;
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg w-[400px] mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Daftar Produk</h2>

      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between bg-gray-800 p-2 rounded-md"
          >
            <span>{product.name}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>

      {handleList() && (
        <p className="text-red-400 mt-4 text-center">{handleList()}</p>
      )}
    </div>
  );
};

export default ProductList;
