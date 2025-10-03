import React from "react";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";

function Comment({ user, text }) {
  return (
    <div
      style={{
        border: "1px solid #aaa",
        borderRadius: "8px",
        padding: "12px",
        margin: "10px 0",
      }}
    >
      <UserInfo user={user} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;
