"use client";
import React, { useEffect, useState } from "react";

export default function B9() {
  const [users, setUser] = useState([]);
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const [listUsers, listPosts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
      ]);

      const userData = await listUsers.json();
      const postData = await listPosts.json();

      setUser(userData);
      setPost(postData);
    };
    fecthData();
  }, []);

  return (
    <div className="flex gap-5">
      <div>
        <b>Danh sách người dùng</b>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              <b>{user.name}</b>
              <p>Email: {user.email}</p>
              <p>________________________________</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <b>Danh sách bài viết</b>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <b>{post.title}</b>
              <p>{post.body}</p>
              <p>____________________________________________________</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
