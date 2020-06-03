import React from 'react'
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaEnvelope, FaPalette } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="bar"></div>
      <h1>Website by Scott McKell</h1>
      <div className="icons">
        <a
          href="https://github.com/zottwickel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github-icon" />
        </a>
        <a
          href="https://www.scottmckell.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPalette className="icon palette-icon" />
        </a>
        <a
          href="https://linkedin.com/in/scott-mckell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a
          href="mailto:scott.g.mckell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  text-align: center;
  h1 {
    font-size: 1.5rem;
  }
  .bar {
    height: 1px;
    background: white;
    width: 60%;
    margin: 1rem auto;
  }
  .icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 1rem;
    &:hover {
      color: red;
    }
  }
  .logo {
    height: 50px;
    width: auto;
    margin-top: 1rem;
  }
`