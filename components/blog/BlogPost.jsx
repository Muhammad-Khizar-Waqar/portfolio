"use client";
import React, { useEffect, useState } from "react";
import data from "../../util/blog.json";
import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard";
import BlogCard3 from "./BlogCard3";
import Pagination from "./Pagination";

// Removed TypeScript interface

export default function BlogPost({ style, showItem, showPagination }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const showLimit = showItem
  const paginationItem = 4;

  const [pagination, setPagination] = useState([]);
  const [limit, setLimit] = useState(showItem || 0);
  const [pages, setPages] = useState(Math.ceil(data.length / (showItem || 1)));

  useEffect(() => {
    createPagination();
  }, [limit, pages, data.length]);

  const createPagination = () => {
    // set pagination
    const arr = new Array(Math.ceil(data.length / (limit || 1)))
      .fill(undefined)
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(data.length / (limit || 1)));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedProducts = data.slice(startIndex, endIndex);

  const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  const end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };
  return (
    <>
      {getPaginatedProducts.length === 0 && <h3>No Products Found </h3>}

      {getPaginatedProducts.map((item) => (
        <React.Fragment key={item.id}>
          {!style && <BlogCard1 item={item} />}
          {style === 1 && <BlogCard1 item={item} />}
          {style === 2 && <BlogCard2 item={item} />}
          {style === 3 && <BlogCard3 item={item} />}
        </React.Fragment>
      ))}

      {showPagination && (
        <Pagination
          getPaginationGroup={getPaginationGroup}
          currentPage={currentPage}
          pages={pages}
          next={next}
          prev={prev}
          handleActive={handleActive}
        />
      )}
    </>
  );
}
