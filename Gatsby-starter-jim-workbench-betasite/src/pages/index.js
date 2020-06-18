/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import Image from "../components/base/image"
import TestApp from "../components/base/TestApp"
import TestApp2 from "../components/base/TestApp2"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>jjkc portfolio</Styled.h1>
    <Styled.p>Welcome to your new portfolio site.</Styled.p>
    <Styled.p>Now go build something great, rtfn!</Styled.p>
    <div sx={{ maxWidth: 300, marginBottom: [3] }}>
      <Image />
    </div>
    <Styled.p>
      <Link to="/page-2/">Go to page 2</Link>
    </Styled.p>
    <TestApp />
    <TestApp2 />
  </Layout>
)

export default IndexPage
