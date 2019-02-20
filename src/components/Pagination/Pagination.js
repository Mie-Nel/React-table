import React from "react";
import classes from "./Pagination.module.css";

function Pagination({ users, usersPerPage, onClickPage }) {
  const pageNumbers = [];
  const pages = users.length / usersPerPage;
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const renderPage = pageNumbers.map((page, index) => {
    return (
      <li key={index} onClick={evt => onClickPage(evt)} id={index + 1}>
        {page}
      </li>
    );
  });
  return <ul className={classes.Pagination}>{renderPage}</ul>;
}

export default Pagination;
