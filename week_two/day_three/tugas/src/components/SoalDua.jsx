import React, { useEffect, useState } from "react";

const UserData = () => {
  const [userId, setUserId] = useState(1); 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data pengguna");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  const handleNextUser = () => {
    setUserId((prevId) => (prevId < 10 ? prevId + 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Data Pengguna Berdasarkan ID</h1>

      <button
        onClick={handleNextUser}
        className="bg-gray-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition-all cursor-pointer"
      >
        lihat id selanjutnya (ID: {userId})
      </button>

      {loading && <p className="text-yellow-400"> Mengambil data...</p>}
      {error && <p className="text-red-500"> {error}</p>}

      {!loading && !error && user && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[300px] text-left">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;
