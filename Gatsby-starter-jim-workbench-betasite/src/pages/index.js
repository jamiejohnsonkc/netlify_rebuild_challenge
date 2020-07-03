/** @jsx jsx */
import React from "react"
// import Layout from "../components/layout/Layout"
import SaasLayout from "../components/presentation/layout/SaasLayout"

import { jsx } from "theme-ui"
import SEO from "../pages/seo"
import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import HeroIntro from "../components/presentation/sections/HeroIntro"
import ProofTabs from "../components/presentation/sections/ProofTabs"
import SaasBenefits from "../components/presentation/sections/SaasBenefits/SaasBenefits"
import SaasGlobalCloud from "../components/presentation/sections/SaasGlobalCloud/SaasGlobalCloud"
import SaasComparison from "../components/presentation/sections/SaasComparison"

const IndexPage = (props) => (
  <SaasLayout>
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
    {/* <DemoContainer /> */}
    <ProofTabs
      {...props}
      sx={{
        borderRadius: 12,
      }}
    />
    <SaasGlobalCloud />
    <SaasBenefits />
    <SaasComparison />
  </SaasLayout>
)

export default IndexPage
