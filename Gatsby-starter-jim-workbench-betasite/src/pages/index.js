/** @jsx jsx */
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Styled, jsx, Container } from "theme-ui"
import SEO from "../pages/seo"

import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"

import HeroClaim from "../components/templates/HeroClaim"
import Grid1r3c from "../components/templates/Grid1r3c"
import TabsTest from "../components/layout/Tabs"
// import geomanistregular from '../../static/Geomanist-Black-Webfont/geomanist-black-webfont.woff'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <ColorModeCycler />
    <ColorModeToggle />
    <HeroClaim />
    <Grid1r3c />
    <div
      {...props}
      sx={{
        height: "200px",
      }}
    >
      <TabsTest />
    </div>
  </Layout>
)

export default IndexPage
