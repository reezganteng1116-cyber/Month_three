import React, { useState } from "react";

const EventSintetik = () => {
    const [ input, setInput ] = useState("");


    const handleLink = (event) => {
        event.preventDefault();
        console.log("Link diklik!");
        alert("Link diklik!");
    };

    const handleInput = (event) => {
        setInput(event.target.value);
        console.log("Yang kamu input", event.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">
            <h1 className="text-2xl font-bold text-cyan-400">
                Soal Nomor 2(Synthetic Event)
            </h1>

            <a
            href="https://www.google.com"
            onClick={handleLink}
            className="text-blue-400 underline hover:text-blue-300">
                Colek Aku Dong!
            </a>

            <div className="flex flex-col items-center gap-2">
                <input
                type="text"
                value={input}
                onChange={handleInput}
                placeholder=" Ketik sesuatu..."
                className="px-4 py-2 rounded-lg text-white bg-gray-600"
                />
                <p className="text-gray-300">Yang kamu ketik: {input || "(kosong)"}</p>
            </div>
        </div>
    );
};

export default EventSintetik;