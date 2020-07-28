/** @jsx jsx */
import { jsx, colorMode, setColorMode, useColorMode } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import SEO from "../../../../pages/seo"
import ProHeroIntro from "../../proSections/ProHeroIntro"
import ProProofTabs from "../../proSections/ProProofTabs"
import ProBenefits from "../../proSections/ProBenefits/ProBenefits"
import ProGlobalCloud from "../../proSections/ProGlobalCloud/ProGlobalCloud"
import ProComparison from "../../proSections/ProComparison"
import ProBuskerCtaBand from "../../proSections/ProBuskerCtaBand"
import ProSubscribe from "../../proSections/ProSubscribe"
import ProLinkStack from "../../proLayout/ProLinkStack"
import ProFooter from "../../proLayout/ProFooter/ProFooter"
import ProTechnology from "../../proSections/ProTechnology"
import ProPlatform from "../../proSections/ProPlatform"
import ProCalloutBand from "../../proSections/ProCalloutBand"
import ProLayout from "../../proLayout/ProLayout"

const ProHomePage = (props) => {
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
      ></div>
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
export default ProHomePage
