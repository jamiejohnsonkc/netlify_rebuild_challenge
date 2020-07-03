/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../../../layout/Header/Header"
import SaasMasthead from "../SaasMasthead"
// import Footer from "../Footer"
// import SaasHeader from "../SaasHeader/SaasHeader"

const SaasLayout = (props) => (
  <Styled.root>
    {/* <SaasHeader /> */}
    <Header>
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
