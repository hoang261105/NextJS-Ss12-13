"use client";
import React, { useEffect, useState } from "react";

export default function B8() {
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterSearch = posts.filter((post: any) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        onChange={handleSearch}
        value={search}
      />
      <ul>
        {filterSearch.map((post: any) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
