import React from 'react';
import Post from './Post'; // Import the Post component

import "./Feed.css";

function Feed() {
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x300',
      content: 'Beautiful Landscape'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x300',
      content: 'City Life'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x300',
      content: 'Night Sky'
    }
  ];

  return (
    <div className="feed">
      {posts.map(post => (
        <Post
          key={post.id}
          image={post.image}
          content={post.content}
          onUpvote={() => console.log("Upvoted post", post.id)}
          onDownvote={() => console.log("Downvoted post", post.id)}
        />
      ))}
    </div>
  );
}

export default Feed;
