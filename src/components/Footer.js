import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPalette } from "react-icons/fa"
import Bar from "./Utils/Bar"

const Footer = () => {
  return (
    <FooterWrapper>
      <Bar />
      <h1>Join Us On Social Media</h1>
      <div className="icons">
        <a
          href="https://www.instagram.com/bettles.kayla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon insta-icon" />
        </a>
        <a
          href="https://www.facebook.com/kayla.kayla.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a
          href="mailto:kaylabettles@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
      <Bar />
      <h1>Website by Scott McKell</h1>
      <div className="icons">
        <a
          href="https://github.com/zottwickel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.scottmckell.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPalette className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/scott-mckell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="mailto:scott.g.mckell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
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
  .facebook-icon {
    color: #3B5998;
  }
  .insta-icon {
    color: #dd2a7b;
  }
  .email-icon {
    color: #D44638;
  }
`
