import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-72">
      <h2 className="text-xl font-semibold mb-2">Counter</h2>
      <p className="text-3xl mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Kurang
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default Counter;
