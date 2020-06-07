import React from "react"
import styled from "styled-components"

const Hero = ({ title, subtitle, img, children, home }) => {
  return (
    <HeroWrapper img={img} home={home}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
        {children}
      </div>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.header`
  min-height: ${props => (props.home ? "calc(100vh - 57px)" : "60vh")};
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    background: rgba(189, 189, 189, 0.8);
    color: black;
    padding: 2rem;
    text-align: center;
    max-width: 60%;
    border-radius: 2px;
    box-shadow: 0 0 10px black;
  }
  .title {
    text-transform: uppercase;
  }
`
