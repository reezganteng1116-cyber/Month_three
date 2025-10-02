import React from "react";
import "./app.css";

function ProfileCard({ name, photo, bio, umur, quote }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <img
        src={photo || "https://via.placeholder.com/100"}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Umur: {umur} tahun</p>

      <div>
        <h4>Quote:</h4>
        {quote.map((q, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              margin: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}

function DiscountCard({ name, price, discount }) {
  const finalPrice = price - (price * discount) / 100;

  function greeting(user) {
    return `Halo, ${user}! Selamat berbelanja 🛒`;
  }

  const upperName = name.toUpperCase();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{upperName}</h2>
      <p>Harga asli: Rp {price}</p>
      <p>Diskon: {discount}%</p>
      <h3>Harga setelah diskon: Rp {finalPrice}</h3>
      <p>{greeting(name)}</p>
    </div>
  );
}

function UserStatus({ isLoggedIn, unreadMessages }) {
  return (
    <div
      style={{
        margin: "20px",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      {isLoggedIn ? (
        <div>
          <h2>Selamat datang kembali! 🎉</h2>
          {unreadMessages > 0 ? (
            <p>Anda punya {unreadMessages} pesan baru 📩</p>
          ) : (
            <p>Tidak ada pesan baru 📭</p>
          )}
        </div>
      ) : (
        <div>
          <h2>Anda belum login ❌</h2>
          <button style={{ padding: "8px 16px", borderRadius: "5px" }}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

function FruitList({ fruits }) {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Daftar Buah 🍎🍊🍌</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#e0f7fa",
              margin: "5px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const profiles = [
    {
      id: 1,
      name: "Ayyasy",
      photo:
        "https://i.pinimg.com/736x/01/96/64/019664e75a7bb17041bdf76bc645c858.jpg",
      bio: "Suka mengaji",
      umur: 20,
      quote: ["jangan lupa sholat!!"],
    },
    {
      id: 2,
      name: "Memed",
      photo:
        "https://i.pinimg.com/736x/9e/8a/8b/9e8a8bcfa6345ac78e7758a441c46a5e.jpg",
      bio: "Belajar",
      umur: 20,
      quote: ["tetap hidup walau bangkrut"],
    },
    {
      id: 3,
      name: "Sutejo",
      photo:
        "https://i.pinimg.com/736x/ad/21/1c/ad211cbda4f0af3d78526972858a17c2.jpg",
      bio: "Makan",
      umur: 10,
      quote: ["makan dulu kata mamah"],
    },
  ];

  const fruits = ["Apel", "Jeruk", "Pisang", "Anggur", "Mangga"];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daftar Profile</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            bio={profile.bio}
            umur={profile.umur}
            quote={profile.quote}
          />
        ))}
      </div>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Contoh JavaScript Expression di JSX
      </h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <DiscountCard name="Rahman" price={100000} discount={20} />
        <DiscountCard name="Aisyah" price={50000} discount={10} />
      </div>

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Contoh Conditional Rendering
      </h1>
      <UserStatus isLoggedIn={true} unreadMessages={3} />
      <UserStatus isLoggedIn={false} unreadMessages={0} />

      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
