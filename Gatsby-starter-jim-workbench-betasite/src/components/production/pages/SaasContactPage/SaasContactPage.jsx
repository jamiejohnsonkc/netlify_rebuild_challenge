/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import SaasLayout from "../../layout/SaasLayout"
import HeroIntroCentered from "../../sections/HeroIntroCentered"
import SEO from "../../../../pages/seo"
import ContactPageContent from "../../sections/ContactPageContent"
import { useColorMode } from "theme-ui"

const SaasContactPage = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("light")
  return (
    <SaasLayout>
      <SEO title="Contact" />
      <HeroIntroCentered />
      <ContactPageContent />
    </SaasLayout>
  )
}
SaasContactPage.propTypes = {}

SaasContactPage.defaultProps = {}

export default SaasContactPage
