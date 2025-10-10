import React, { useEffect, useState } from "react";

const SimulasiFetch = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("📡 Memulai pengambilan data dari API...");

    setLoading(true);
    setError("");

    const timeoutId = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gagal mengambil data pengguna");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data berhasil diambil:", data);
          setUser(data);
        })
        .catch((err) => {
          console.error("Terjadi kesalahan:", err);
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Simulasi Fetch Data dari API</h1>

      {loading && <p className="text-yellow-400 animate-pulse">🔄 Mengambil data pengguna...</p>}
      {error && <p className="text-red-500">❌ {error}</p>}

      {!loading && !error && user && (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[320px] text-left">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Kota:</strong> {user.address.city}</p>
          <p><strong>Perusahaan:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default SimulasiFetch;
