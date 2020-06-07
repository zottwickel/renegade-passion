import React from "react"
import styled from "styled-components"

const Email = () => {
  return (
    <EmailWrapper>
      <h1>Contact Form</h1>
      <form action="https://formspree.io/mdowgjze" method="POST">
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" required />
        <label htmlFor="subject">Subject</label>
        <input name="subject" id="subject" type="text" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" required />
        <button type="submit">Send</button>
      </form>
    </EmailWrapper>
  )
}

export default Email

const EmailWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  label {
    display: block;
  }
  textarea {
    resize: vertical;
  }
  textarea,
  input {
    width: 80%;
    background: rgb(189, 189, 189, 1);
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 2px;
    border: 1px solid red;
  }
  button {
    display: block;
    margin: 1rem auto;
    color: white;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid white;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
    }
  }
`
