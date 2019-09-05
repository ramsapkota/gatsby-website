import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by
        <a href={`https://www.twitter.com/${author}`} target="_blank">
          {data.site.siteMetadata.author}
        </a>
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
