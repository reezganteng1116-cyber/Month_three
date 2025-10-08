import React, { useState } from "react";

const FormControl = () => {
    const [ name, setName ] = useState("");
    const [ kirimNama, setKirimNama ] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleKirim = (e) => {
        e.preventDefault();
        setKirimNama(name);
        console.log("Nama yang di kirim:", name);
        setName("");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">
            <h1 className="text-2xl font-bold text-cyan-400"> Soal Tiga (Controlled Component)</h1>

            <form
            onSubmit={handleKirim}
            className="flex flex-col items-center gap-4">
                <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder=" Masukkan nama anda..."
                className="px-4 py-2 rounded-lg text-white bg-gray-600" />
                <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg">
                    Kirim
                </button>
            </form>

            <p className="text-gray-300">
                Yang Sedang Kamu Ketik: <span className="text-white font-semibold">{name || 
                "(kosong)"}</span>
            </p>

            {kirimNama && (
                <p className="text-green-400 font-semibold">
                    Data terkirim: {kirimNama}
                </p>
            )}
        </div>
    );
};

export default FormControl;