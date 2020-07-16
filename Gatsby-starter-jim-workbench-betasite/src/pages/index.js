/** @jsx jsx */
import React from "react"
// import Layout from "../components/layout/Layout"
import ProLayout from "../components/production/ProLayout/ProLayout"

import { jsx, colorMode, setColorMode, useColorMode } from "theme-ui"
import SEO from "../pages/seo"
import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import ProHeroIntro from "../components/production/sections/ProHeroIntro"
import ProProofTabs from "../components/production/sections/ProProofTabs"
import ProBenefits from "../components/production/sections/ProBenefits/ProBenefits"
import ProGlobalCloud from "../components/production/sections/ProGlobalCloud/ProGlobalCloud"
import ProComparison from "../components/production/sections/ProComparison"
import ProBuskerCtaBand from "../components/production/sections/ProBuskerCtaBand"
import ProSubscribe from "../components/production/sections/ProSubscribe"
import ProLinkStack from "../components/production/ProLayout/ProLinkStack"
import ProFooter from "../components/production/ProLayout/ProFooter/ProFooter"
import ProTechnology from "../components/production/sections/ProTechnology"
import ProPlatform from "../components/production/sections/ProPlatform"
import ProCalloutBand from "../components/production/sections/ProCalloutBand"
// import ProTable from "../components/templates/ProTable"

const IndexPage = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("splash")
  return (
    <ProLayout>
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
      <ProHeroIntro />
      <ProGlobalCloud />
      <ProProofTabs />
      <ProBenefits />
      <ProComparison />
      <ProTechnology />
      <ProCalloutBand />
      <ProPlatform />
      <ProBuskerCtaBand />
      <ProSubscribe />
      <ProLinkStack />
      <ProFooter />
    </ProLayout>
  )
}
export default IndexPage
