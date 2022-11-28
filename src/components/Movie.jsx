import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin-top: 50px;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-warp: warp;
    padding: 30px;
  }

  .container .card {
    position: relative;
    max-width: 300px;
    height: 250px;
    background-color: #fff;
    margin: 30px 10px;
    padding: 20px 15px;

    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
  }
  .container .card:hover {
    height: 420px;
  }
  .container .card:active {
    height: 420px;
  }

  .container .card .image {
    position: relative;
    width: 260px;
    height: 260px;

    top: -40%;
    left: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .container .card .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    border-radius: 15px;
  }

  .container .card .content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;

    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .container .card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
  .container .card:active .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
  h3 {
    font-weight: bold;
    text-align: center;
  }
  p {
    line-height: 1.3em;
    text-align: left;
  }
`;
function Movie({ movie }) {
  return (
    <Card>
      <div className="container">
        <div className="card">
          <div className="image">
            <img href="#" src="/poster.jpeg" alt={movie.name}></img>
            <br />
            <br />
            <br />
            <br />
            <h3>{movie.name}</h3>
          </div>
          <div className="content">
            <br />
            <p>Movie runtime in minutes: {movie.runtimeInMinutes}</p>
            <p>Budget: ${movie.budgetInMillions} million</p>
            <p>Revenue: ${movie.boxOfficeRevenueInMillions} million</p>
            <p>Academy award nominations: {movie.academyAwardNominations}</p>
            <p>Academy award wins: {movie.academyAwardWins}</p>
            <p>Rotten Tomatoes score: {movie.rottenTomatoesScore}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Movie;
