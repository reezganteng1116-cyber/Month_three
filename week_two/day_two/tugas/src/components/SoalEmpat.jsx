import React from "react";

const ProductList = () => {
     const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 },
  ];
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-10">
            <h1 className="font-bold items-center justify-center text-3xl">Soal Nomor Empat</h1>
            <h2 className="text-2xl font-bold mb-6"> Daftar Produk</h2>

            <ul className="bg-gray-800 p-6 rounded-xl shadow-lg w-[350px] space-y-3">
                {products.map((product) => (
                    <li
                    key={product.id}
                    className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        <span>{product.name}</span>
                        <span className="font-semibold">${product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;