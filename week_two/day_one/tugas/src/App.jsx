import React from "react";
import EventHandler from "./components/SoalSatu";
import EventSintetik from "./components/SoalDua";
import FormControl from "./components/SoalTiga";
import UncontrolledForm from "./components/SoalEmpat";
import FormRegister from "./components/SoalLima";

export default function App() {
  return (
    <div>
      <EventHandler />
      <EventSintetik />
      <FormControl />
      <UncontrolledForm />
      <FormRegister />
    </div>
  )
}