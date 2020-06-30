/** @jsx jsx */
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Styled, jsx, Container } from "theme-ui"
import SEO from "../pages/seo"

import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import HeroIntro from "../components/presentation/HeroIntro"
import HeroClaim from "../components/templates/HeroClaim"
// import Grid1r3c from "../components/templates/Grid1r3c"
import Pancake from "../components/layout/Pancake"
import ProofTabs from "../components/presentation/ProofTabs"
import Test from "../components/layout/Test"

// import geomanistregular from '../../static/Geomanist-Black-Webfont/geomanist-black-webfont.woff'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div
      {...props}
      sx={{
        position: "absolute",
        zIndex: 1000,
        top: 0,
        left: 0,
      }}
    >
      <ColorModeCycler />
      <ColorModeToggle />
    </div>
    <HeroIntro />
    <ProofTabs
      {...props}
      sx={{
        borderRadius: 12,
      }}
    />
  </Layout>
)

export default IndexPage
