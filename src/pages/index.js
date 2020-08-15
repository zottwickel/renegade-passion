import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/pic1.jpg"
import styled from "styled-components"
import HeroButton from "../components/Utils/HeroButton"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      title="renegade passion"
      subtitle="Empowering and caring for sex trafficking victims."
      img={img}
      home={true}
    >
      <AniLink fade to="/blog">
        <HeroButton>Blog</HeroButton>
      </AniLink>
    </Hero>
    <PartnersWrapper>
      <h1>Our Partners</h1>
      <div className="p-c">
        {/* <a
          className="p-l"
          href="https://soap2hopeut.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="p-i"
            src={require("../images/soap2hopelogo.jpg")}
            alt="soap 2 hope logo"
          />
        </a> */}
        <a
          className="p-l"
          href="http://dontbepimped.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="p-i"
            src={require("../images/dontbepimpedlogo.png")}
            alt="don't be pimped logo"
          />
        </a>
      </div>
      <h1>My Story</h1>
      <iframe
        title="story1"
        className="v"
        src="https://www.youtube.com/embed/ZAyh1-btvhU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe><br />
      <iframe
        title="story2"
        className="v"
        src="https://www.youtube.com/embed/Dwbs80Dz8CA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe><br />
      <iframe
        title="story3"
        className="v"
        src="https://www.youtube.com/embed/B9gm4Kbv4jA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </PartnersWrapper>
    <AboutWrapper>
      <h1>Our Mission</h1>
      <p>
        To advocate for and empower survivors of human trafficking to heal. To
        bring together organizations so that when a survivor wants out, she can
        get out. To provide love and kindness to those who are still out there.
      </p>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, scaevola voluptatum pro in, eros brute
        evertitur vix at, ius posse semper ea. Labores voluptatibus ut sed, mea
        ea congue iisque, sit ne noster omnium. Ne reque harum vis. Ne causae
        melius pro. An vim vivendo concludaturque. Nam id clita iuvaret
        euripidis, an sed quaeque feugait scaevola. Eos ex mundi iuvaret
        imperdiet, usu praesent reprimique assueverit et. No solet possit animal
        est, ne usu vidisse interpretaris, sanctus splendide et eum. Has an
        aliquam debitis iracundia, integre eripuit vix ei. Pri an audire
        volumus, eius iusto per ea. An pro cibo phaedrum, eum affert noluisse
        copiosae ad, id odio eius verear pri. Usu et labitur interesset. Vide
        nusquam recusabo ius an, melius tractatos ea eam, ex eirmod malorum
        adolescens nec. Laoreet dolores eos ne, cu quando oportere disputando
        pri. Mei quod magna offendit eu, id vero dolore mentitum vis. Vim
        fabellas complectitur ei, vix ex audire graecis oportere. Vel eu labitur
        fuisset. Ea per simul lucilius repudiare. Odio aliquid ei his, vero
        legere reformidans an vim. Per in percipit expetendis, pri singulis
        assueverit te, duis nonumes intellegat ei nec.
      </p>
    </AboutWrapper>
  </Layout>
)

export default IndexPage

const PartnersWrapper = styled.section`
  padding: 2rem;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
  }
  .p-c {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .p-i {
    border-radius: 2px;
    height: 160px;
    max-width: 320px;
    background: white;
    margin: 1rem;
    box-shadow: 0 0 10px black;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 10px red;
    }
  }
  .v {
    width: calc(100vw - 4rem);
    height: calc(60vw - 4rem);
    margin: 1rem auto;
  }
  @media (min-width: 768px) {
    .v {
      display: block;
      width: calc(50vw - 4rem);
      height: calc(30vw - 4rem);
    }
  }
`
const AboutWrapper = styled.section`
  background: rgba(189, 189, 189, 1);
  background: linear-gradient(
    160deg,
    rgba(189, 189, 189, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: black;
  border-radius: 2px;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
  border-right: 2px solid red;
  box-shadow: 0 0 10px black;
  h1 {
    margin: 2rem;
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }
`
