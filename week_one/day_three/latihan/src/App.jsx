import React from "react";
import "./App.css";

import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import Comment from "./components/Comment/Comment";

function App() {
  const user = {
    name: "Reza",
    avatarUrl: "https://tse3.mm.bing.net/th/id/OIP.2kWR_NlPsTV5a3dewDKNzAHaJF?pid=Api&P=0&h=220",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Greeting name="Jaisy" />
      <Greeting name="Reza" />

      <h2>Daftar Produk</h2>
      <ProductCard className="card"
        productName="Laptop Gaming"
        price={15000000}
        stock={5}
        isAvailable={true}
      />
      <ProductCard productName="Mouse Wireless" price={250000} />
      <h2>Contoh Card dengan Children</h2>
      <Card>
        <h3>Kucing Nyolot</h3>
        <p>Ini Adalah Foto Kucing Nyolot Yang Nggak Nyelon</p>
      </Card>
      <Card>
        <img src="https://tse2.mm.bing.net/th/id/OIP.R9c_524Fq3awjeAsMB_ligHaHa?pid=Api&P=0&h=220" alt="Gambar contoh" />
      </Card>
      <Card>
        <button style={{ padding: "8px 12px" }}>Klik Saya</button>
      </Card>

      <h2>Komentar</h2>
      <Comment
        user={user}
        text="Halo Guys! Saya Adalah Orang Ganteng, Itu Yang Harus Kalian Tanam Dalam Otak Kalian"
      />
      <Comment
        user={{
          name: "Ayyasy",
          avatarUrl: "https://tse4.mm.bing.net/th/id/OIP.FoE8pqKZYz2o4VRFVeEAwgHaHa?pid=Api&P=0&h=220",
        }}
        text="Aku Cabul!"
      />
    </div>
  );
}

export default App;
