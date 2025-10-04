import React from "react";
import ProfileBox from "./components/ProfileBox";
import Button from "./components/Button";
import AlertBox from "./components/AlertBox";
import StyledBox from "./components/StyledBox";
import ResponsiveBox from "./components/ResponsiveBox";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ProfileBox />

      <div style={{ marginTop: "20px" }}>
        <Button label="Default" type="default" />
        <Button label="Primary" type="primary" />
      </div>

      <AlertBox type="success" message="berhasil" />
      <AlertBox type="warning" message="Sepertinya ada yang salah" />
      <AlertBox type="error" message="Terjadi kesalahan!" />

      <StyledBox />
      <ResponsiveBox />
    </div>
  );
}

export default App;
