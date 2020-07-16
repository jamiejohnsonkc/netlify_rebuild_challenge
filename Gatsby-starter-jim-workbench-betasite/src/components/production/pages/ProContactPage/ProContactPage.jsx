/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import ProLayout from "../../layout/ProLayout"
import HeroIntroCentered from "../../sections/HeroIntroCentered"
import SEO from "../../../../pages/seo"
import ContactPageContent from "../../sections/ContactPageContent"
import { useColorMode } from "theme-ui"

const ProContactPage = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("light")
  return (
    <ProLayout>
      <SEO title="Contact" />
      <HeroIntroCentered />
      <ContactPageContent />
    </ProLayout>
  )
}
ProContactPage.propTypes = {}

ProContactPage.defaultProps = {}

export default ProContactPage
