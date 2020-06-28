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
import TabsBlock from "../components/layout/TabsBlock"
import Pancake from "../components/layout/Pancake"
import ProofTabs from "../components/templates/ProofTabs"
// import geomanistregular from '../../static/Geomanist-Black-Webfont/geomanist-black-webfont.woff'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />

    <HeroClaim />
    <ProofTabs />
  </Layout>
)

export default IndexPage
