import React, { useState, useEffect } from "react";

const ContohUseEffect = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(`Komponen diperbarui, count sekarang: ${count}`);
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4"> Soal Nomor Dua (UseEffect)</h2>
            <p className="mb-4 text-lg"> Nilai Count Sekarang: {count}</p>

            <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold">
                Tambah Count
            </button>
        </div>
    );
};

export default ContohUseEffect;