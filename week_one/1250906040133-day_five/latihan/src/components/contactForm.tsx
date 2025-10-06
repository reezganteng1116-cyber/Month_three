import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");

  const greetUser = (userName: string): string => {
    return `Halo, ${userName}! Terimakasih telah mengirimkan pesan ${message} `;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Semua field harus diisi!");
      return;
    }

    setGreeting(greetUser(name));
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setGreeting("");
    }, 4000);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-left">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama kamu"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="contoh@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pesan</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
            placeholder="Tulis pesanmu..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition"
        >
          Kirim
        </button>
      </form>

      {submitted && (
        <div className="mt-4 text-green-400 text-center font-semibold animate-pulse">
          {greeting || "✅ Pesan berhasil dikirim!"}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
