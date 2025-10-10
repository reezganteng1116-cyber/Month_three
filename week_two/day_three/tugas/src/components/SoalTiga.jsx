import React, { useState, useEffect } from "react";

const LacakUkuranJendela = () => {
    const [ukuranJendela, setUkuranJendela] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handlePerubahan = () => {
        setUkuranJendela({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handlePerubahan);
        console.log("resize ditambahkan");

        return () => {
            window.removeEventListener("resize", handlePerubahan);
            console.log("resize dihapus");
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Soal Nomor Tiga (Mengukur Jendela Window)</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <p className="text-lg">
                    <strong>Width:</strong> {ukuranJendela.width}px
                </p>
                <p className="text-lg">
                    <strong>Height:</strong> {ukuranJendela.height}px
                </p>
            </div>
            <p className="text-sm text-gray-400 mt-4">Ubah ukuran windows</p>
        </div>
    );
};

export default LacakUkuranJendela;