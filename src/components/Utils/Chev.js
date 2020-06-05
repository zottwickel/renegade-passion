import React from 'react'
import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"

function handleClick() {
  window.scrollTo({top: 0, behavior: "smooth"})
}

const Chev = () => {
  return (
    <Return onClick={handleClick}>
      <FaChevronUp />
    </Return>
  )
}

export default Chev

const Return = styled.div`
  border-radius: 50%;
  background: rgb(189, 189, 189, 0.5);
  color: black;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  box-shadow: 0 0 10px black;
  padding: 10px 11.5px 8px 11.5px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`