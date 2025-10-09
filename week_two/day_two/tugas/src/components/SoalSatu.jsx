import React, { useState } from "react";


const TulisanLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  let pesan;
  if (isLogin) {
    pesan = <h2 className="text-green-400">Selamat datang kembali</h2>
  } else {
    pesan = <h2 className="text-red-400">Silahkan login atau registrasi terlebih dahulu.</h2>
  }

  return (
    <div className="bg-gray-900 items-center justify-center flex flex-col min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4"> Soal Satu (Conditional Rendering Dengan If Else)</h1>

      {pesan}

      <button
      onClick={() => setIsLogin(!isLogin)}
      className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg ">
        {isLogin ? "logout" : "Login"}
      </button>
    </div>
  );
};

export default TulisanLogin;