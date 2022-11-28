import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: var(--book-size-height);
  width: var(--book-size-width);
  background-color: var(--book-background);
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5em;
  border-left: 16px solid brown;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 6px;
  h2 {
    color: var(--book-text-color);
    font-size: var(--book-text-font-size);
  }
  &:hover {
    scale: 1.02;
    cursor: pointer;
  }
`;

function Book({ item }) {
  ///book/{id}/chapter
  return (
    <Card>
      <h2>{item.name}</h2>
    </Card>
  );
}

export default Book;
