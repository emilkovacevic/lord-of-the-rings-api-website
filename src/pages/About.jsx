import styled from "styled-components";

const Page = styled.div`
  text-align: center;
  h1 {
    padding: 20px;
    font-size: 1.5em;
  }
  p {
    margin: 20px 0;
  }
`;
function About() {
  return (
    <Page>
      <h1>Made by Emil</h1>
      <p>
        Api taken from{" "}
        <a href="https://the-one-api.dev" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
      <p>
        My{" "}
        <a href="https://github.com/emilkovacevic" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </Page>
  );
}

export default About;
