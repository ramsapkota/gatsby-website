import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Blog page</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
