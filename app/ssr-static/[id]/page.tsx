"use client";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function B7(props: Props) {
  const [postDetail, setPostDetail] = useState<any>();
  const { params } = props;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPostDetail(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <b>{postDetail?.title}</b>
      <p>{postDetail?.body}</p>
    </div>
  );
}
