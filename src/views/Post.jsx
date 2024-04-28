import React, { useState } from "react";
import "./Post.css";

function Post({ image, description, username }) {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div className="post">
      <header className="post-header">
        <h2>{username}</h2>
      </header>
      <img src={image} alt="Post" className="post-image" />
      <div>
        <button onClick={handleUpvote}>🔼</button>
        <span>{votes}</span>
        <button onClick={handleDownvote}>🔽</button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Post;
