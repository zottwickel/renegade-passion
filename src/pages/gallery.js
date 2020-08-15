import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/gallery1.jpg"
import styled from "styled-components"

const Gallery = () => {
  const [activePic, setPic] = useState(0)
  const imgArr = [
    {
      fileName: "IMG_1395",
    },
    {
      fileName: "IMG_1403",
    },
    {
      fileName: "IMG_1406",
    },
    {
      fileName: "IMG_1412",
    },
    {
      fileName: "IMG_1428",
    },
    {
      fileName: "IMG_1432",
    },
    {
      fileName: "IMG_1441",
    },
    {
      fileName: "IMG_1450",
    },
    {
      fileName: "IMG_1456",
    },
    {
      fileName: "IMG_1467",
    },
    {
      fileName: "IMG_1477",
    },
    {
      fileName: "IMG_1483",
    },
    {
      fileName: "IMG_1493",
    },
    {
      fileName: "IMG_1496",
    },
    {
      fileName: "IMG_1508",
    },
    {
      fileName: "IMG_1528",
    },
    {
      fileName: "IMG_1545",
    },
    {
      fileName: "IMG_1552",
    },
    {
      fileName: "IMG_1600",
    },
    {
      fileName: "IMG_1616",
    },
    {
      fileName: "IMG_1639",
    },
  ]
  return (
    <Layout>
      <SEO title="Gallery" />
      <Hero
        title="gallery"
        subtitle="A gallery of Kayla and friends."
        img={img}
        home={false}
      ></Hero>
      <StyledGallery>
        <div className="selector">
          {imgArr.map((pic, i) => {
            return (
              <img
                className={`img${i}`}
                src={require(`../images/apparel/${pic.fileName}.jpg`)}
                alt="an image from our gallery"
              />
            )
          })}
        </div>
      </StyledGallery>
    </Layout>
  )
}

const StyledGallery = styled.section`
  img {
    max-width: 50vw;
    margin: 2vw auto;
    display: block;
  }
`

export default Gallery
