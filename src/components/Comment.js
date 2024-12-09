import React from "react";

export default function Comment({ username, isAdmin }) {
  return (
    <div>
      <h3>Comments</h3>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit comment</button>}
    </div>
  );
}
