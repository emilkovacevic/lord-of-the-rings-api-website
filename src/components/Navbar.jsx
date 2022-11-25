import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const Nav = styled.nav`
  position: ${(props) => (props.scrollNavPosition ? "fixed" : "relative")};
  width: 100%;
  background: var(--nav-background);
  min-height: 20px;
  padding: 1em 0.5em;
  text-transform: uppercase;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--page-max-width);
    margin: auto;
  }
  li {
    padding: 10px ;
    .link {
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
`;
const UL_NavLinks = styled.ul`
  display: flex;
  button {
    padding: 5px 10px;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: -16px;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--mobile-nav-menu-background);
  ul {
    background: var(--mobile-nav-menu-items-background);
    margin: 30px auto;
    max-width: 400px;
    text-align: center;
    }
  }
`;

function Navbar() {
  const [nav, setNav] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollNavPosition, setScrollNavPosition] = useState(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 20
        ? setScrollNavPosition(true)
        : setScrollNavPosition(false);
    }
  };

  useEffect(() => {
    const size = window.innerWidth;
    size > 600 ? setNav(false) : setNav(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <Nav scrollNavPosition={scrollNavPosition}>
      <div className="container">
        <div>Emil Kovacevic</div>
        {mobileMenu ? (
          <MobileMenu
            onClick={() => {
              setMobileMenu(false);
            }}
          >
            <ul>
              <li>
                <Link className="link" to="/?cat=home">
                  <h6>Home</h6>
                </Link>
              </li>
              <li>
                <Link className="link" to="/?cat=art">
                  <h6>About</h6>
                </Link>
              </li>
              <li>
                <Link className="link" to="/?cat=art">
                  <FaLinkedinIn></FaLinkedinIn>
                </Link>
              </li>
            </ul>
          </MobileMenu>
        ) : null}
        {nav ? (
          <UL_NavLinks>
            <li>
              <button
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                <BiMenu></BiMenu>
              </button>
            </li>
          </UL_NavLinks>
        ) : (
          <UL_NavLinks>
            <li>
              <Link className="link" to="/?cat=home">
                <h6>Home</h6>
              </Link>
            </li>
            <li>
              <Link className="link" to="/?cat=art">
                <h6>About</h6>
              </Link>
            </li>
            <li>
              <Link className="link" to="/?cat=art">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
            </li>
          </UL_NavLinks>
        )}
      </div>
    </Nav>
  );
}

export default Navbar;
