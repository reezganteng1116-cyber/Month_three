import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email === "") {
      setEmailError("Email tidak boleh kosong!");
    } else if (!regexEmail.test(email)) {
      setEmailError("Email yang anda masukkan tidak valid!");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password === "") {
      setPasswordError("Password tidak boleh kosong!");
    } else if (!regexPassword.test(password)) {
      setPasswordError(
        "Minimal 8 karakter dan harus mengandung huruf besar, kecil, angka, serta simbol."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError && email && password) {
      setSubmittedData({
        email,
        password,
      });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray text-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Login
        </h2>

        <div className="mb-6">
          <label className="text-2xl font-bold mb-8 text-center text-black">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Masukkan email anda..."
            className="w-full p-3 rounded-lg bg-gray-700 border border-cyan-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
          />
          
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="text-2xl font-bold mb-8 text-center text-black">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Masukkan password anda..."
            className="w-full p-3 rounded-lg bg-gray-700 border border-cyan-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="text-sm text-cyan-400 hover:text-cyan-300 mt-1"
          >
            {showPassword ? "Sembunyikan Password" : "Tampilkan Password"}
          </button>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md border border-cyan-600">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">
            Hasil Input
          </h3>
          <p>
            <span className="font-semibold text-gray-300">Email:</span>{" "}
            {submittedData.email}
          </p>
          <p>
            <span className="font-semibold text-gray-300">Password:</span>{" "}
            {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
