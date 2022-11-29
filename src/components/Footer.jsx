import React from "react";
import styled from "styled-components";

const PageFooter = styled.footer`
  margin: auto;
  padding: 20px 0;
  background: var(--footer-background);
  .container {
    display: flex;
    justify-content: space-between;
    max-width: var(--page-max-width);
    margin: auto;
    text-align: center;
  }
`;

function Footer() {
  return (
    <div>
      <PageFooter>
        <div className="container">
          <p>
            API taken from{" "}
            <a href="https://the-one-api.dev/" target="_blank" rel="noopener noreferrer">
              The One API
            </a>
          </p>
          <p>Made By Emil</p>

          <p>
            Find me on{" "}
            <a href="https://github.com/emilkovacevic" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </PageFooter>
    </div>
  );
}

export default Footer;
