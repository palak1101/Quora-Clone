import React from "react";
import "./CSS/Feed.css";
import Post from "./Post";
import QuoraBox from "./QuoraBox";

const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;