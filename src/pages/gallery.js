import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/gallery1.jpg"

const gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Hero
        title="gallery"
        subtitle="Pictures and videos coming soon!"
        img={img}
        home={false}
        ></Hero>
    </Layout>
  )
}

export default gallery
