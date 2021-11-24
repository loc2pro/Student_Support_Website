import React, { useState, useEffect } from "react";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function Paginations({
  setCurrentPage,
  currentPage,
  totalPage,
}) {
  return (
    <div className="py-2">``
      <div className="flex items-center justify-center">
        <ul className="flex pl-0 rounded list-none">
          <PaginationItem
            onClick={(e) => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            ripple="dark"
          >
            <Icon name="keyboard_arrow_left" />
          </PaginationItem>
          <h1 >
            {currentPage}/{totalPage}
          </h1>
          <PaginationItem 
            onClick={(e) => {
              if (currentPage < totalPage) {
                setCurrentPage(currentPage + 1);
              }
            }}
            ripple="lightBlue"
          >
            <Icon name="keyboard_arrow_right" />
          </PaginationItem>
        </ul>
      </div>
    </div>
  );
}
