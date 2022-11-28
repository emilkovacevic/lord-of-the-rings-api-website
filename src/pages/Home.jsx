import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Character from "../components/Character";
import Book from "../components/Book";
import Movie from "../components/Movie";

const MainPage = styled.div`
  max-width: var(--page-max-width);
  margin: 40px auto;
  .characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .books {
    display: flex;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const DropdownMenu = styled.div`
  z-index: 5;
  position: fixed;
  top: 120px;
  left: 10px;
  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content button {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

const Pagination = styled.div`
  max-width: var(--page-max-width);
  font-size: 1.2em;
  margin: 0 35px;
  display: flex;
  justify-content: flex-end;
  button {
    font-size: 1rem;
  }
`;

function Home() {
  const [querySearchBar, setQuerySearchBar] = useState("quote");
  const [page, setPage] = useState(1);
  const [dropDownMenu, setDropDownMenu] = useState(true);
  console.log(querySearchBar);
  const handleQuerySearch = (e) => {
    e.preventDefault();
    setQuerySearchBar(e.target.value);
    console.log(querySearchBar);
  };

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer prXVkao8sk4ZbZaueyKy",
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [querySearchBar, page],
    queryFn: () =>
      fetch(`https://the-one-api.dev/v2/${querySearchBar}`, {
        headers: headers,
      }).then((res) => res.json()),
  });

  const styles = {
    dropdown: {
      display: dropDownMenu ? "block" : "none",
      backgroundColor: dropDownMenu ? "#ddd;" : "none",
    },
  };

  return (
    <MainPage>
      {console.log(data)}
      <DropdownMenu>
        <div class="dropdown">
          <button
            class="dropbtn"
            onClick={() => setDropDownMenu(!dropDownMenu)}
          >
            Select Category
          </button>
          <div class="dropdown-content" style={styles.dropdown}>
            <button value="movie" onClick={handleQuerySearch}>
              Movies
            </button>
            <button value="character" onClick={handleQuerySearch}>
              Characters
            </button>
            <button value="book" onClick={handleQuerySearch}>
              Books
            </button>
          </div>
        </div>
      </DropdownMenu>
      <div className="flex-container">
        {isLoading && <div>Loading API</div>}
        {error && <div>{error.message}</div>}
        <div className="movies">
          {querySearchBar === "movie" &&
            data?.docs.map((movie) => <Movie key={movie._id} movie={movie} />)}
        </div>

        <div className="books">
          {querySearchBar === "book" &&
            data?.docs.map((item) => <Book item={item} />)}
        </div>

        {querySearchBar === "character" && (
          <div>
            {!isLoading && (
              <Pagination>
                <div>
                  <button onClick={() => setPage((prev) => prev - 1)}>
                    --Prev
                  </button>
                  <span> {page} </span>
                  <button onClick={() => setPage((prev) => prev + 1)}>
                    Next++
                  </button>
                </div>
              </Pagination>
            )}

            <div className="characters">
              {data?.docs.map((item) => (
                <Character key={item._id} data={item} />
              ))}
            </div>

            {!isLoading && (
              <Pagination>
                <div>
                  <button onClick={() => setPage((prev) => prev - 1)}>
                    --Prev
                  </button>
                  <span> {page} </span>
                  <button onClick={() => setPage((prev) => prev + 1)}>
                    Next++
                  </button>
                </div>
              </Pagination>
            )}
          </div>
        )}
      </div>
    </MainPage>
  );
}

export default Home;
