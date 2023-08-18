import React from "react";
import "./style.css";

const Pagination = ({ page, setPage }) => {
  const backButton = () => {
    setPage(page - 1);
  };
  const nextButton = () => {
    setPage(page + 1);
  };
  return (
    <div className="paginationN">
      <button id="button-back" onClick={backButton} disabled= {page <=0}>
      
      </button>
     <p>{page}</p>
      <button id="button-next" onClick={nextButton} disabled = {page >=5}>
        
      </button>
    </div>
  );
};

export default Pagination;
