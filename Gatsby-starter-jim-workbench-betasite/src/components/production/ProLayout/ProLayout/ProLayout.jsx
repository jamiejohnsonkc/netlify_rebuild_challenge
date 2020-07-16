/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../../../layout/Header/Header"
import ProMasthead from "../ProMasthead"
import ProAnnouncementBar from "../ProHeader/ProAnnouncementBar"
// import Footer from "../Footer"
// import ProHeader from "../ProHeader/ProHeader"

const ProLayout = (props) => (
  <Styled.root>
    {/* <ProHeader /> */}
    <Header>
      <ProAnnouncementBar />
      <ProMasthead />
    </Header>
    <main>{props.children}</main>
    {/* <Footer /> */}
  </Styled.root>
)

ProLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProLayout
