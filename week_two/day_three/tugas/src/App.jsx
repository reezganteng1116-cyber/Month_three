import React from "react";
import ContohUseEffect from "./components/SoalSatu";
import UserProfile from "./components/SoalDua";
import LacakUkuranJendela from "./components/SoalTiga";
import MultiEffect from "./components/SoalEmpat";
import SimulasiFetch from "./components/SoalLima";


export default function App() {
    return (
        <div>
            <ContohUseEffect />
            <UserProfile />
            <LacakUkuranJendela />
            <MultiEffect />
            <SimulasiFetch />
        </div>
    )
}