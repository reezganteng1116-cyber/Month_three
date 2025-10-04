import React from "react";
import "../styles/ProfileBox.css";

function ProfileBox() {
  const titleStyle = {
    color: "white",
    backgroundColor: "#007b8f",
    padding: "10px",
    borderRadius: "8px",
  };

  const descStyle = {
    color: "lightgray",
    marginTop: "10px",
  };

  return (
    <div className="profile-container">
      <h1>Halo Guys!</h1>
      <h2 style={titleStyle}>Gw Jaisyurrahman</h2>
      <p style={descStyle}>Kotak profile dengan inline style</p>
      <img
        src="public\images\IMG-20250618-WA0004 - Copy.jpg"
        alt="profile"
        className="profile-image"
      />
    </div>
  );
}

export default ProfileBox;
