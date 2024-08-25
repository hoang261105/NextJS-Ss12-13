"use client";
import React, { useEffect, useState } from "react";

export default function B2() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul>
      <b>Danh sách bài viết</b>
      {users.map((item: any) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}
