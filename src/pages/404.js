import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/404.jpg"
import StyledButton from "../components/Utils/HeroButton"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero
      title="404: not found"
      subtitle="The page you are looking for does not exist!"
      img={img}
      home={true}
    >
      <AniLink fade to="/">
        <StyledButton>Home</StyledButton>
      </AniLink>
    </Hero>
  </Layout>
)

export default NotFoundPage
