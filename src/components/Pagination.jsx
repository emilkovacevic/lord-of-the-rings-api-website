import React from "react";
import styled from "styled-components";

const PaginationComponent = styled.div`
  max-width: var(--page-max-width);
  font-size: 1.2em;
  margin: 20px 35px;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 1rem;
  }
`;

function Pagination({ page, setPage }) {
  return (
    <PaginationComponent>
      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>--Prev</button>
        <span> {page} </span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next++</button>
      </div>
    </PaginationComponent>
  );
}

export default Pagination;
