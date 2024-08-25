"use client";
import React, { useEffect, useState } from "react";

export default function B1() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul>
      {posts.map((post: any) => (
        <li>
          <b>{post.title}</b>
          <p>{post.body}</p>
          <p>____________________________________</p>
        </li>
      ))}
    </ul>
  );
}
