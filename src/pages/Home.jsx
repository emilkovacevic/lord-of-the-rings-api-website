import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import Article from "../components/Article";
const MainPage = styled.div`
  max-width: var(--page-max-width);
  margin: 20px auto;
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    img {
      object-fit: cover;
      margin-top: 0px;
    }
    @media (min-width: 960px) {
      img {
        margin-top: 50px;
      }
      & > * {
        width: var(--article-width);
      }
      & > :first-child {
        width: 100%;
      }
    }
  }
`;

function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json()
      ),
  });
  useEffect(() => {
    console.log(data);
  }),
    [isLoading];

  return (
    <MainPage>
      <div className="flex-container">
        <Article />
        <Article />
        <Article />
      </div>
    </MainPage>
  );
}

export default Home;
