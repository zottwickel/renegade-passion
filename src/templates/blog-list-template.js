import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Utils/Hero"
import img from "../images/blog1.jpg"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaHashtag } from "react-icons/fa"

const Blog = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const { data } = props
  return (
    <Layout>
      <SEO title="Blog" />
      <Hero
        title="blog"
        subtitle="Experience the firsthand journey of Kayla, a survivor of sex trafficking."
        img={img}
        home={false}
      ></Hero>
      <BlogList>
        <h1>Articles</h1>
        <div className="b-lf">
          {data.posts.edges.map(({ node }) => {
            return (
              <PostCard key={node.id}>
                <AniLink className="c-l" fade to={`blog/${node.slug}`}>
                  <h2><FaHashtag /> {node.title}</h2>
                </AniLink>
                <p>{node.published}</p>
              </PostCard>
            )
          })}
        </div>
      </BlogList>
      <Pages>
        {!isFirst && (
          <AniLink fade to={prevPage} className="l">
            Prev
          </AniLink>
        )}
        {Array.from({ length: numPages }, (_, i) => {
          return (
            <AniLink
              key={i}
              fade
              to={`/blog/${i === 0 ? "" : i + 1}`}
              className={i + 1 === currentPage ? "l a" : "l"}
            >
              {i + 1}
            </AniLink>
          )
        })}
        {!isLast && (
          <AniLink fade to={nextPage} className="l">
            Next
          </AniLink>
        )}
      </Pages>
    </Layout>
  )
}

export default Blog

const BlogList = styled.section`
  padding: 1rem;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    .b-lf {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`

const PostCard = styled.div`
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
  border-right: 2px solid red;
  text-align: left;
  box-shadow: 0 0 10px black;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px red;
  }
  h2 {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  .c-l {
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: red;
    }
  }
`

const Pages = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  .l {
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
  .a {
    color: red;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
`

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id
          published(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
