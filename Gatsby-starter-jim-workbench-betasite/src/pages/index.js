/** @jsx jsx */
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Styled, jsx, Container } from "theme-ui"
import SEO from "../pages/seo"

import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"

import HeroClaim from "../components/templates/HeroClaim"
// import geomanistregular from '../../static/Geomanist-Black-Webfont/geomanist-black-webfont.woff'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ColorModeCycler />
    <ColorModeToggle />
    <HeroClaim />
  </Layout>
)

export default IndexPage
