/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import Layout from "gatsby-theme-jim-base-workbench/src/components/presentation/Layout"
import { Styled, jsx } from "theme-ui"
import SEO from "gatsby-theme-jim-base-workbench/src/pages/seo"
import Image from "gatsby-theme-jim-base-workbench/src/components/base/image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>the new shiznat</Styled.h1>
    <Styled.p>This will be the new portfolio site</Styled.p>
    <Styled.p>Now go build something great, rtfn!</Styled.p>
    <div sx={{ maxWidth: 300, marginBottom: [3] }}>
      <Image />
    </div>
    <Styled.p>
      <Link to="/page-2/">Go to page 2</Link>
    </Styled.p>
  </Layout>
)

export default IndexPage
