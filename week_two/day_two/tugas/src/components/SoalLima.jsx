import React from "react";

const ProductListUpgrade = () => {
    const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
        <h1 className="text-3xl items-center justify-center font-bold">Soal Nomor Lima</h1>
      <h2 className="text-2xl font-bold mb-6">Daftar Produk</h2>

      {products.length === 0 ? (
        <p className="text-red-400 font-semibold">
          Tidak ada produk yang tersedia
        </p>
      ) : (
        <ul className="bg-gray-800 p-6 rounded-xl shadow-lg w-[350px] space-y-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              <span>{product.name}</span>
              <span className="font-semibold">${product.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListUpgrade;
