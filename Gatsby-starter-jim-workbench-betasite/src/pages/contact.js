/** @jsx jsx */
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import { Styled, jsx, Container } from "theme-ui"
import SEO from "../pages/seo"
import Contact from "../components/inputs/Forms/Contact"

import ColorModeToggle from "../components/inputs/ColorModeToggle"
import ColorModeCycler from "../components/inputs/ColorModeCycler"

// import geomanistregular from '../../static/Geomanist-Black-Webfont/geomanist-black-webfont.woff'

const ContactPage = (props) => (
  <Layout>
    <SEO title="Contact" />
    <div
      {...props}
      sx={{
        bg: "primary",
        height: "100px",
        width: "100px",
        position: "relative",
      }}
    >
      control
    </div>
    <div
      {...props}
      sx={{
        bg: "custom.jamie",
        height: "100px",
        width: "100px",
        position: "relative",
      }}
    >
      test
    </div>
    <Contact />
  </Layout>
)

export default ContactPage
