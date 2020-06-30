/** @jsx jsx */
import React from "react"
import Layout from "../components/layout/Layout"
import { jsx } from "theme-ui"
import SEO from "../pages/seo"
import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import HeroIntro from "../components/presentation/HeroIntro"
import ProofTabs from "../components/presentation/ProofTabs"

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
