import React from "react";
import Avatar from "./Avatar";

function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar src={user.avatarUrl} alt={user.name} />
      <h4>{user.name}</h4>
    </div>
  );
}

export default UserInfo;
