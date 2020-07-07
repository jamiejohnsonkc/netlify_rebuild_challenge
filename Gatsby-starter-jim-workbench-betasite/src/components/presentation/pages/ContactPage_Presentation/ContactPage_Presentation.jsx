/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import SaasLayout from "../../layout/SaasLayout"
import HeroIntroCentered from "../../sections/HeroIntroCentered"
import SEO from "../../../../pages/seo"
import ContactPageContent from "../../sections/ContactPageContent"

const ContactPage_Presentation = (props) => (
  <SaasLayout>
    <SEO title="Contact" />
    <HeroIntroCentered />
    <ContactPageContent />
  </SaasLayout>
)

ContactPage_Presentation.propTypes = {}

ContactPage_Presentation.defaultProps = {}

export default ContactPage_Presentation
