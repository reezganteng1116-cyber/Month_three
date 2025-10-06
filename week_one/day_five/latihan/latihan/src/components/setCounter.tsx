import React, { useState } from "react";

const SetCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = (): void => setCount(count + 1);
  const handleDecrease = (): void => setCount(count - 1);
  const handleReset = (): void => setCount(0);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center w-72">
      <h2 className="text-xl font-semibold mb-2">Nilai Counter:</h2>
      <h1 className="text-5xl font-bold mb-4 text-yellow-400">{count}</h1>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleDecrease}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          -
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
        >
          Reset
        </button>

        <button
          onClick={handleIncrease}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetCounter;
