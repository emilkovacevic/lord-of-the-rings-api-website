import React from "react";
import styled from "styled-components";

const Err = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Error({ error }) {
  return <Err>{error}</Err>;
}

export default Error;
