"use client";
import React, { useEffect, useState } from "react";

export default function B4() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <button style={{ border: "1px solid darkgray" }}>Refresh</button> <br />
      <b>Danh sách bài viết với refresh</b>
      <ul>
        {posts.map((post: any) => (
          <li>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
