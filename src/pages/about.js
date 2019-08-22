import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <h2>Hi, this is about page</h2>
        <p>
          <Link to="contact"> Click me</Link> For contact details{" "}
        </p>
      </div>
    </Layout>
  )
}

export default about
