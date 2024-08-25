"use client";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function B3(props: Props) {
  const [postDetail, setPostDetail] = useState<any>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPostDetail(data))
      .catch((err) => console.log(err));
  }, []);
  const { params } = props;
  return (
    <div>
      <b>Chi tiết bài viết</b>
      <h2 style={{ fontWeight: "bold" }}>{postDetail?.title}</h2>
      <p>{postDetail?.body}</p>
    </div>
  );
}
