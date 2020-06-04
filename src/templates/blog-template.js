import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Article = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  return (
    <Layout>
      <SEO title={title} />
      <BlogContainer>
        <h1>{title}</h1>
        <h2>Published at : {published}</h2>
        <div className="bar"></div>
        <article className="t">
          {documentToReactComponents(json)}
        </article>
        <AniLink fade to="/blog" className="l">
          All Posts
        </AniLink>
      </BlogContainer>
    </Layout>
  )
}

export default Article

const BlogContainer = styled.section`
  margin-top: 2rem;
  text-align: center;
  .t {
    margin: 1rem;
  }
  .l {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    border: 2px solid white;
    border-radius: 2px;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: black;
      background: white;
    }
  }
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  .bar {
    height: 1px;
    background: white;
    width: 60%;
    margin: 1rem auto;
  }
`

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`
