import React, { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>Blog Page</h1>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin} />
    </div>
  );
}
