import React from "react"
import styled from "styled-components"

const Contacts = () => {
  return (
    <ContactsWrapper>
      <div>
        <h1>Contact Info</h1>
        <p>
          Contact Kayla Bettles should you need any support. Email is the best
          route, however she is available at the number below for texts/calls.
        </p>
        <h2>Kayla Bettles:</h2>
        <h3>
          Phone: <a href="tel:+12069533505">206-953-3405</a>
        </h3>
        <h3>
          Email:{" "}
          <a href="mailto:kaylabettles@gmail.com">kaylabettles@gmail.com</a>
        </h3>
        <h2>National Human Trafficking Hotline:</h2>
        <h3>
          Phone: <a href="tel:+18883737888">888-373-7888</a><br />
          Website: <a href="https://www.humantraffickinghotline.org">humantraffickinghotline.org</a>
        </h3>
      </div>
    </ContactsWrapper>
  )
}

export default Contacts

const ContactsWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 80%;
  display: flex;
  align-items: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    margin: 1rem auto;
  }
  h3 {
    font-size: 1.5rem;
    margin: 0.25rem;
  }
  a {
    color: red;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: rgba(189, 189, 189, 1);
    }
  }
`
