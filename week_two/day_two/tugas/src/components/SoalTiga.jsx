import React from "react";

const StatusPesan = ({ status }) => {
    let pesan;
    let warna;

    switch (status) {
        case "loading":
            pesan = "Loading... Mohon Tunggu Sebentar";
            warna = "text-yellow-400";
            break;
        case "success":
            pesan = "Berhasil Masuk!";
            warna = "text-green-400";
            break;
        case "error":
            pesan = "Gagal Memuat! Coba lagi nanti";
            warna = "text-red-500";
            break;
        default:
            pesan = "Sinyal tidak jelas";
            warna = "text-gray-400";
            break;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-white font-bold items-center justify-center"> Soal Tiga </h1>
            <h1 className={`text-white font-semibold ${warna}`}>{pesan}</h1>
        </div>
    );
};

export default StatusPesan;