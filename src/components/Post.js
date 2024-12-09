import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h2>Example Post Title</h2>
      <p>Example post content</p>
      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
}
