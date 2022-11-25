import React from "react";
import styled from "styled-components";

const PageFooter = styled.footer`
  margin: auto;
  padding: 10px 0;
  min-height: 50px;
  background: var(--footer-background);
  .container {
    display: flex;
    justify-content: space-between;
    max-width: var(--page-max-width);
    margin: auto;
  }
`;

function Footer() {
  return (
    <div>
      <PageFooter>
        <div className="container">Footer</div>
      </PageFooter>
    </div>
  );
}

export default Footer;
