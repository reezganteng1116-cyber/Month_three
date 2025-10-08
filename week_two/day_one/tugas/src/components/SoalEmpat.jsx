import React, { useRef, useState } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef(null); 
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const inputValue = nameRef.current.value;
    setSubmittedValue(inputValue);
    console.log("Nilai input:", inputValue);
    nameRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-cyan-400">Uncontrolled Component Example</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          ref={nameRef}
          placeholder="Masukkan nama Anda..."
          className="px-4 py-2 rounded-lg text-white bg-gray-400"
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Kirim
        </button>
      </form>

      {submittedValue && (
        <p className="text-green-400 font-semibold">
          Nilai yang dikirim: {submittedValue}
        </p>
      )}
    </div>
  );
};

export default UncontrolledForm;
