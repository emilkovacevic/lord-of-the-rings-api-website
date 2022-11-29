import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Character from "../views/Character";
import Book from "../views/Book";
import Movie from "../views/Movie";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import Menu from "../components/Menu";
import Error from "../components/Error";

const HomePage = styled.div`
  position: relative;
  max-width: var(--page-max-width);
  margin: 80px auto 0;
  padding: 2rem;
  display: flex;
  .characters,
  .books,
  .movies,
  .quotes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
function Home() {
  const [querySearchBar, setQuerySearchBar] = useState("movie");
  const [page, setPage] = useState(1);

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer prXVkao8sk4ZbZaueyKy"
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [querySearchBar, page],
    queryFn: () =>
      fetch(`https://the-one-api.dev/v2/${querySearchBar}?limit=20?page=${page}`, {
        headers: headers
      }).then((res) => res.json())
  });

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <Error error={error.message} />;
  }

  return (
    <HomePage>
      {console.log(data)}
      <Menu setQuerySearchBar={setQuerySearchBar} />
      <div>
        {isLoading && <div>Loading API</div>}
        {error && <div>{error.message}</div>}
        <div className="movies">
          {querySearchBar === "movie" &&
            data?.docs.map((movie) => <Movie key={movie._id} movie={movie} />)}
        </div>

        <div className="books">
          {querySearchBar === "book" &&
            data?.docs.map((item) => <Book key={item._id} item={item} />)}
        </div>

        {querySearchBar === "character" && (
          <div>
            {!isLoading && <Pagination page={page} setPage={setPage} />}
            <div className="characters">
              {data?.docs.map((item) => (
                <Character key={item._id} data={item} />
              ))}
            </div>
            {!isLoading && <Pagination page={page} setPage={setPage} />}
          </div>
        )}
      </div>
    </HomePage>
  );
}

export default Home;
