import React, { useState } from "react";


const EventHandler = () => {
    const [ pesan, setPesan ] = useState("Arahkan mouse ke tombol");
    const [ warna, setWarna ] = useState("bg-blue-500");


    const handleKlik = () => {
        setPesan("Tombol diklik");
        setWarna("bg-green-500");
    };

    const handleMouseMasuk = () => {
        setPesan("Mouse sedang di atas tombol");
        setWarna("bg-yellow-500");
    };

    const handleMouseKeluar = () => {
        setPesan("Mouse tidak di atas tombol");
        setWarna("bg-blue-500");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6">Soal 1 (Event Handler)</h1>

            <button
            onClick={handleKlik}
            onMouseEnter={handleMouseMasuk}
            onMouseLeave={handleMouseKeluar}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition-all ${warna}`}>
                Aksi Tombol
            </button>
            <p className="mt-6 text-lg text-gray-300">{pesan}</p>
        </div>
    );
};

export default EventHandler;