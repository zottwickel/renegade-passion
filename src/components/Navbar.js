import React, { useState } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronDown, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"
import links from "../constants/links"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const handleNavbar = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="header">
        <AniLink className="logo" fade to="/">
          Renegade <span className="sublogo">Passion</span>
        </AniLink>
        <FaChevronDown
          className={`toggle-icon ${isOpen ? "chev-open" : ""}`}
          onClick={() => handleNavbar()}
        />
      </div>
      <ul className={`links ${isOpen ? "links-open" : "links-closed"}`}>
        {links.map((item, index) => {
          return (
            <li key={index} className="link-item">
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </ul>
      <div className="icons">
        <a
          href="https://www.facebook.com/kayla.kayla.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kayla-bettles-354882197/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a
          href="mailto:kaylabettles@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  background: linear-gradient(to bottom, rgba(66,66,66,1) 0%, rgba(0,0,0,1) 100%);
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    .toggle-icon {
      display: none;
    }
    .links {
      height: auto !important;
      display: flex;
      margin: 0 auto;
    }
    .icons {
      display: flex !important;
      width: 10rem;
      justify-content: space-around;
    }
  }
  .header {
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-family: 'Damion';
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }
  .sublogo {
    color: red;
  }
  .toggle-icon {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .chev-open {
    transform: rotate(180deg);
  }
  .links {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .links-open {
    height: 180px;
  }
  .links-closed {
    height: 0px;
  }
  .link-item {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: red;
    }
  }
  .icons {
    display: none;
  }
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .facebook-icon {
    color: #3B5998;
  }
  .linkedin-icon {
    color: #0e76a8;
  }
  .email-icon {
    color: #D44638;
  }
`
