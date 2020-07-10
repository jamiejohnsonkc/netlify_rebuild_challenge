/** @jsx jsx */
import React from "react"
// import Layout from "../components/layout/Layout"
import SaasLayout from "../components/production/layout/SaasLayout"

import { jsx, colorMode, setColorMode, useColorMode } from "theme-ui"
import SEO from "../pages/seo"
import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import HeroIntro from "../components/production/sections/HeroIntro"
import ProofTabs from "../components/production/sections/ProofTabs"
import SaasBenefits from "../components/production/sections/SaasBenefits/SaasBenefits"
import SaasGlobalCloud from "../components/production/sections/SaasGlobalCloud/SaasGlobalCloud"
import SaasComparison from "../components/production/sections/SaasComparison"
import CalloutBand from "../components/production/sections/CalloutBand"
import BuskerCtaBand from "../components/production/sections/BuskerCtaBand"
import SaasSubscribe from "../components/production/sections/SaasSubscribe"
import SaasLinkStack from "../components/production/layout/SaasLinkStack"
// import SaasTable from "../components/templates/SaasTable"

const IndexPage = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("splash")
  return (
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
      {/* <SaasTable /> */}
      <SaasComparison />
      <CalloutBand />
      <BuskerCtaBand />
      <SaasSubscribe />
      <SaasLinkStack />
    </SaasLayout>
  )
}
export default IndexPage
