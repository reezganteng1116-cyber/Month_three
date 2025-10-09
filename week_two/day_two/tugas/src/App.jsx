import React from "react";
import TulisanLogin from "./components/SoalSatu";
import TernaryOperator from "./components/SoalDua";
import StatusPesan from "./components/SoalTiga";
import ProductList from "./components/SoalEmpat";
import ProductListUpgrade from "./components/SoalLima";

export default function App() {
  return (
    <div>
      <TulisanLogin />
      <TernaryOperator />
      <StatusPesan />
      <ProductList />
      <ProductListUpgrade />
    </div>
  )
}