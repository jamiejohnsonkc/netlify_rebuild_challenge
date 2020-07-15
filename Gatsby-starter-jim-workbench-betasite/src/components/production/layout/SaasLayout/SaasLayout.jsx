/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../../../layout/Header/Header"
import SaasMasthead from "../SaasMasthead"
import SaasAnnouncementBar from "../header/SaasAnnouncementBar"
// import Footer from "../Footer"
// import SaasHeader from "../SaasHeader/SaasHeader"

const SaasLayout = (props) => (
  <Styled.root>
    {/* <SaasHeader /> */}
    <Header>
      <SaasAnnouncementBar />
      <SaasMasthead />
    </Header>
    <main>{props.children}</main>
    {/* <Footer /> */}
  </Styled.root>
)

SaasLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SaasLayout
