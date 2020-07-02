/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import SaasMenu from "../../../presentation/SaasMenu/SaasMenu"

//* Navbox is the wrapper for the navMenu and provides animation styles for the mobile menu/drawer

const StyledDiv = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const Navbox = (props) => (
  <StyledDiv
    {...props}
    sx={{
      variant: "nav.navBox",
    }}
    className="navBox"
  >
    {/* {props.children} */}
    <SaasMenu />
  </StyledDiv>
)

Navbox.propTypes = {}

Navbox.defaultProps = {}

export default Navbox
