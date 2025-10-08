import React, { useState } from "react"


const FormRegister = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const [kirimData, setKirimData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newError = {};

        if(!formData.username.trim()) {
            newError.username = "Username tidak boleh kosong!";
        }

        if (!formData.email.includes("@")) {
            newError.email = "Email harus mengandung '@'.";
        }

        if (formData.password.length < 6) {
            newError.password = "Password minimal 6 karakter.";
        }

        return newError;
    };

    const handleKirim = (e) => {
        e.preventDefault();
        const validationError = validate();

        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            setKirimData(null);
        } else {
            setError({});
            setKirimData(formData);
            console.log("Data berhasil dikirim:", formData);
            setFormData({ username: "", email: "", password: "" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-cyan-400 mb-4"> Soal Nomor Lima (Form Register)</h1>

            <form
            onSubmit={handleKirim}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col gap-4">
                <div>
                    <label className="block mb-1 font-semibold">Username</label>
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg text-white bg-gray-400"
                    placeholder=" Masukkan username..."
                    />
                    {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg text-white bg-gray-400"
                    placeholder=" Masukkan email..."
                    />
                    {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg text-white bg-gray-400"
                    placeholder=" Masukkan password..."
                    />
                    {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
                </div>

                <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg mt-2">Daftar</button>
            </form>

            {kirimData && (
                <div className="mt-6 bg-gray-800 p-4 rounded-lg w-full max-w-sm text-center">
                <h2 className="text-lg font-bold text-green-400 mb-2"> Data berhasil dikirim!</h2>
                <p><span className="font-semibold">Username:
                </span>{kirimData.username}</p>
                <p><span className="font-semibold">Email:
                </span>{kirimData.email}</p>
                <p><span className="font-semibold">Password:
                </span>{kirimData.password}</p>
                </div>
            )}
        </div>
    );
};

export default FormRegister;