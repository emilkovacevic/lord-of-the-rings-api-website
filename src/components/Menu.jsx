import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useWindowDimensions } from "../hooks/ScreenSize";
const DropDown = styled.div`
  position: fixed;
  z-index: 5;
  max-width: var(--page-max-width);
  top: 65px;
  display: flex;
  background-color: white;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .menubtn {
    background-color: slateblue;
    border: none;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
  }
  .desc {
    border-radius: 0 5px 5px 0;
    background-color: slateblue;
    letter-spacing: 2px;
    color: white;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .content {
    display: flex;
  }
  .option {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    &:hover,
    &:focus {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

function Menu({ setQuerySearchBar }) {
  const CATEGORIES = ["book", "character", "movie"];
  const [showOptions, setShowOptions] = useState(false);
  const { width } = useWindowDimensions() ?? [];
  useEffect(() => {
    if (width < 800) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }, [width]);

  return (
    <DropDown>
      {showOptions ? (
        <div className="desc">
          <button className="menubtn" onClick={() => setShowOptions(!showOptions)}>
            <h2>Categories</h2>
          </button>
        </div>
      ) : (
        <div className="content">
          {CATEGORIES.map((category) => (
            <div key={category}>
              <button
                className="option"
                value={category}
                onClick={(e) => {
                  setQuerySearchBar(e.target.value);
                }}>
                {category}
              </button>
            </div>
          ))}
          <button className="menubtn" onClick={() => setShowOptions(!showOptions)}>
            X
          </button>
        </div>
      )}
    </DropDown>
  );
}

export default Menu;
