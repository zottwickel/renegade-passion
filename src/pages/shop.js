import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../images/shop1.jpg"
import Hero from "../components/Utils/Hero"

const shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Hero
        title="shop"
        subtitle="Shop coming soon!"
        img={img}
        home={false}
        ></Hero>
    </Layout>
  )
}

export default shop
