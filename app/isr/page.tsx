"use client";
import React, { useEffect, useState } from "react";

export default function B10() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((err) => console.log(err));
    };

    fetchPosts(); // Initial fetch

    // Set up interval to refresh data every 60 seconds
    const intervalId = setInterval(() => {
      fetchPosts();
    }, 10000); // 60 seconds in milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <b>{post.title}</b>
          <p>{post.body}</p>
          <p>_________________________________________________</p>
        </li>
      ))}
    </ul>
  );
}
