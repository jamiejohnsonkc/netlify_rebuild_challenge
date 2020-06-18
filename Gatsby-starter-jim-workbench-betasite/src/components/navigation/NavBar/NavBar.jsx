/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React, { useState } from "react"
import PropTypes from "prop-types"

const NavBar = (props) => (
  <Styled.div
    as="nav"
    className="navBar"
    sx={{
      display: ["flex"],
      position: ["sticky", "relative"],
      width: "100%",
      zIndex: 2,
      alignSelf: "center",
      alignItems: "center",
      top: ["0", "null"],
      left: ["0", "null"],
      right: ["0", "null"],
      left: ["0", "null"],
      variant: "layout.nav",
      listStyleType: "none",
      lineHeight: 1.5,
    }}
  >
    {props.children}
  </Styled.div>
)

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
