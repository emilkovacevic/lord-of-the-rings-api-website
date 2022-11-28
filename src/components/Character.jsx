import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CharacterQuote from "./CharacterQuote";

const CharacterContainer = styled.article`
  position: relative;
  min-width: 200px;
  box-shadow: var(--character-card-box-shadow);
  width: var(--character-card-width);
  margin: var(--character-card-margin);
  background-color: var(--character-card-background);
  border-radius: var(--character-card-border-radius);
  &:hover {
    box-shadow: var(--hover-character-card-box-shadow);
  }
  .content-wrapper {
    min-height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .link_open-character-card a,
    .link_open-character-card button {
      font-size: 1.2rem;
      color: var(--link-color);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    h2 {
      margin: var(--character-card-heading-margin);
      color: var(--character-card-heading-color);
      font-size: var(--character-card-heading-font-size);
      font-weight: bold;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    button {
      border: none;
      background: var(--character-card-background);
      text-transform: capitalize;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
function Character({ data }) {
  const [modal, setModal] = useState(false);

  return (
    <CharacterContainer>
      {modal ? (
        <CharacterQuote id={data._id} setModal={setModal} />
      ) : (
        <div className="content-wrapper">
          <h2>Name: {data.name}</h2>
          <div>
            <ul>
              {data.race ? (
                <li>
                  <p>Race: {data.race}</p>
                </li>
              ) : null}
              {data.height ? (
                <li>
                  <p>Height: {data.height}</p>
                </li>
              ) : null}
              {data.hair ? (
                <li>
                  <p>Hair: {data.hair}</p>
                </li>
              ) : null}
              {data.spouse ? (
                <li>
                  <p>Spouse: {data.spouse}</p>
                </li>
              ) : null}
              {data.realm ? (
                <li>
                  <p>Realm: {data.realm}</p>
                </li>
              ) : null}
              {data.birth ? (
                <li>
                  <p>Birth: {data.birth}</p>
                </li>
              ) : null}
              {data.death ? (
                <li>
                  <p>Death: {data.death}</p>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="links">
            {data.wikiUrl ? (
              <div className="link_open-character-card">
                <a href={data.wikiUrl} target="_blank">
                  Read more
                </a>
              </div>
            ) : null}
            {data._id ? (
              <div className="link_open-character-card">
                <button onClick={() => setModal(!modal)}>see quotes</button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </CharacterContainer>
  );
}

export default Character;
