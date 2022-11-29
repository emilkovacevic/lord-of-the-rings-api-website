import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  div {
    max-width: 250px;
    padding: 0 1em;
  }
  .card-title {
    font-size: 1em;
    font-weight: bold;
    margin: 1em 0;
  }
  p {
    margin: 5px 0;
  }
`;
function Movie({ movie }) {
  return (
    <Card>
      <img src="/poster.jpeg" alt={movie.title}></img>
      <div>
        <h2 class="card-title">Movie Series: {movie.name}</h2>
        <p>Movie runtime in minutes: {movie.runtimeInMinutes}</p>
        <p>Budget: ${movie.budgetInMillions} million</p>
        <p>Revenue: ${movie.boxOfficeRevenueInMillions} million</p>
        <p>Academy award nominations: {movie.academyAwardNominations}</p>
        <p>Academy award wins: {movie.academyAwardWins}</p>
        <p>Rotten Tomatoes score: {movie.rottenTomatoesScore}</p>
      </div>
    </Card>
  );
}

export default Movie;
