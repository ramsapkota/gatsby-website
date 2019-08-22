import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const index = () => {
  return (
    <Layout>
      <div>
        <h1>Hello,</h1>
        <h2>I am Ram, a full-stack developer living in beautiful Nepal.</h2>
        <p>
          Need a develoepr? <Link to="contact">Contact Me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default index
