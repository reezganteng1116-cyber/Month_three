import React, { useState, useEffect } from "react";

const MultiEffect = () => {
    const [count, setCount] = useState(0);
    const [nama, setNama] = useState("");


    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(`Count berubah menjadi ${count}`);
    }, [count]);

    useEffect(() => {
        if (nama) {
            console.log(`Nama diubah menjadi: ${nama}`);
        }
    }, [nama]);

    useEffect(() => {
        console.log("Komponents berhasil di jalankan!");
        return () => console.log("Komponents di-unmount");
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-8">
            <h1 className="text-2xl font-bold mb-2">Soal Nomor Empat (Multi Effect)</h1>

             <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[320px] text-center">
        <p className="text-lg mb-4">
          <strong>Count:</strong> {count}
        </p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold"
        >
          Tambah Count
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[320px] text-center">
        <label htmlFor="name" className="block mb-2 text-gray-300">
          Masukkan Nama:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setNama(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
          placeholder="Ketik nama kamu..."
        />
      </div>
    </div>
  );
};

export default MultiEffect;