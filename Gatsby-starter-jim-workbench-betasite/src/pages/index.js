/** @jsx jsx */
import { Styled, jsx, Text } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

import SEO from "./seo"
import Image from "../../src/image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Text
      sx={{
        variant: "styles.b3",
      }}
    >
      the new new shiznat
    </Text>
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
