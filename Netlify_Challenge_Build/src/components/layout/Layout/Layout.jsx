/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
// import AnnouncementBar from "../AnnouncementBar"
// import ProMasthead from "../../production/ProMasthead"

const Layout = (props) => (
  <Styled.root>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Styled.root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
