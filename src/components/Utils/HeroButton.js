import styled from "styled-components"

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid black;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`

export default StyledButton
