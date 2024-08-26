"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function B6() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [records, setRecords] = useState<number>(0); // Changed initial state to 0
  const [limit, setLimit] = useState<number>(5); // Display 5 posts per page
  const totalPage = Math.ceil(records / limit);
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPosts, setCurrentPosts] = useState<any[]>([]); // State to manage posts for the current page

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setRecords(data.length); // Update the total number of records
        setCurrentPosts(data.slice(0, limit)); // Set initial posts for the first page
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Calculate posts to show on the current page
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    setCurrentPosts(posts.slice(startIndex, endIndex));
  }, [currentPage, posts, limit]);

  const handleNextPage = (): void => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChoiceCurrentPage = (page: number): void => {
    setCurrentPage(page);
  };

  const renderPages = (): ReactNode => {
    const pages: ReactNode[] = [];
    const pageNeighbors = 1;
    const startPage = Math.max(2, currentPage - pageNeighbors);
    const endPage = Math.min(totalPage - 1, currentPage + pageNeighbors);
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = endPage < totalPage - 1;

    const spillOffset = pageNeighbors * 2 + 3;
    const pageToShow = totalPage > spillOffset;

    pages.push(
      <Button
        onClick={handlePrevPage}
        key="prev"
        variant={"secondary"}
        size={"icon"}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>
    );

    pages.push(
      <Button
        onClick={() => handleChoiceCurrentPage(1)}
        key={1}
        variant={currentPage === 1 ? "default" : "secondary"}
        size={"icon"}
      >
        1
      </Button>
    );

    // Hiển thị dấu "..." bên phải
    if (hasRightSpill && pageToShow) {
      pages.push(<span key="right-spill">...</span>);
    }

    // Trang cuối cùng
    if (totalPage > 1) {
      pages.push(
        <Button
          onClick={() => handleChoiceCurrentPage(totalPage)}
          key={totalPage}
          variant={currentPage === totalPage ? "default" : "secondary"}
          size={"icon"}
        >
          {totalPage}
        </Button>
      );
    }

    pages.push(
      <Button
        onClick={handleNextPage}
        key="next"
        variant={"secondary"}
        size={"icon"}
        disabled={currentPage === totalPage}
      >
        <ChevronRight />
      </Button>
    );
    return <div className="flex gap-3">{pages}</div>;
  };

  return (
    <main className="p-5">
      <b>Phân trang vs CSR</b>
      <div>
        {currentPosts.map((post) => (
          <div key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {renderPages()}
      <span>
        Trang {currentPage}/{totalPage}
      </span>
    </main>
  );
}
