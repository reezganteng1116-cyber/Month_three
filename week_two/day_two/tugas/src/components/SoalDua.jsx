import React, { useState } from "react";

const TernaryOperator = () => {
   const [isLogin, setIsLogin] = useState(false);
   const [message, setMessage] = useState(1);

   return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4"> Soal Dua (Conditional Rendering Dengan ? :)</h1>

        <h2 className="text-lg mb-4">
            {isLogin ? "Selamat Datang!" : "Silakan Login Terlebih Dahulu!"}
        </h2>

        {message > 0 && (
            <p className="text-yellow-400">
                Kamu memiliki {message} belum dibaca{message > 1 ? "" : ""}.
            </p>
        )}

        <div className="flex gap-3 mt-6">
            <button
            onClick={() => setIsLogin(!isLogin)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
                {isLogin ? "Logout" : "Login"}
            </button>

            <button
            onClick={() => setMessage((prev) => prev + 1)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg">
                Tambah Pesan
            </button>
        </div>
    </div>
   );
};

export default TernaryOperator;