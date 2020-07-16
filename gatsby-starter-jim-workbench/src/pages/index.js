/** @jsx jsx */
import React from "react"
import ProLayout from "../components/production/proLayout/ProLayout"

import { jsx, colorMode, setColorMode, useColorMode } from "theme-ui"
import SEO from "../pages/seo"
import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"
import ProHeroIntro from "../components/production/proSections/ProHeroIntro"
import ProProofTabs from "../components/production/proSections/ProProofTabs"
import ProBenefits from "../components/production/proSections/ProBenefits/ProBenefits"
import ProGlobalCloud from "../components/production/proSections/ProGlobalCloud/ProGlobalCloud"
import ProComparison from "../components/production/proSections/ProComparison"
import ProBuskerCtaBand from "../components/production/proSections/ProBuskerCtaBand"
import ProSubscribe from "../components/production/proSections/ProSubscribe"
import ProLinkStack from "../components/production/proLayout/ProLinkStack"
import ProFooter from "../components/production/proLayout/ProFooter/ProFooter"
import ProTechnology from "../components/production/proSections/ProTechnology"
import ProPlatform from "../components/production/proSections/ProPlatform"
import ProCalloutBand from "../components/production/proSections/ProCalloutBand"

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
