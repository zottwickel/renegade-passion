import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../images/shop1.jpg"
import Hero from "../components/Utils/Hero"
import styled from "styled-components"

const shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Hero
        title="shop"
        subtitle="Show your support with our premium apparel."
        img={img}
        home={false}
      ></Hero>
      <StyledShop>
        <h1>Head over to the contact page to buy!</h1>
        <p>
          Just message us with the item, quantity, size, and your address, and
          we will deliver it to you. Should you fall within the greater Salt
          Lake City area, we will personally deliver your order to you. Some
          additional charges may apply.
        </p>
        <div className="product">
          <img
            src={require("../images/apparel/IMG_1428.jpg")}
            alt="Don't be pimped tank"
          />
          <div className="description">
            <h2>Don't Be Pimped Tank</h2>
            <p>
              "Don't Be Pimped" says it all with this summer tank to show your
              support of victims of sex traffiking. Also available in men's
              sizes.
            </p>
            <h2>$24.99 + Shipping</h2>
          </div>
        </div>
        <div className="product">
          <img
            src={require("../images/apparel/IMG_1395.jpg")}
            alt="Elephant pants"
          />
          <div className="description">
            <h2>Elephant pants</h2>
            <p>
              These elephant pants are as comfortable as they are stylish. 100%
              of proceeds go to survivors of sex trafficking. Available in blue,
              green, red and black.
            </p>
            <h2>$29.99 + Shipping</h2>
          </div>
        </div>
        <div className="product">
          <img src={require("../images/apparel/IMG_1467.jpg")} alt="Kimono" />
          <div className="description">
            <h2>Kimono</h2>
            <p>
              Limited supply! Get these kimonos while they last. They not only
              are stylish, but they are as comfortable as it gets for sleepwear
              and casual wear.
            </p>
            <h2>$49.99 + Shipping</h2>
          </div>
        </div>
        <div className="product">
          <img
            src={require("../images/apparel/IMG_1441.jpg")}
            alt="Free AF tank"
          />
          <div className="description">
            <h2>Free AF Tank</h2>
            <p>
              Free and Forgiven! Show your support today for people who have
              struggled with addictions and situations that take over all of our
              freedoms. Also available in teal.
            </p>
            <h2>$24.99 + Shipping</h2>
          </div>
        </div>
      </StyledShop>
    </Layout>
  )
}

const StyledShop = styled.section`
  padding: 1rem;
  img {
    height: 200px;
    margin-right: 1rem;
    width: auto;
  }
  .product {
    display: flex;
    padding: 1rem;
  }
  .description {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    img { 
      height: 30vw;
    }
  }
`

export default shop
