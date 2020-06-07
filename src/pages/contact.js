import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/contact1.jpg"
import styled from "styled-components"
import Email from "../components/Contact/Email"
import Contacts from "../components/Contact/Contacts"

const gallery = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        title="contact"
        subtitle="Book Kayla for speaking appearences or contact us for anything else below."
        img={img}
        home={false}
        ></Hero>
      <ContactContainer>
        <Email />
        <Contacts />
      </ContactContainer>
    </Layout>
  )
}

export default gallery

const ContactContainer = styled.section`
  padding: 1rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`