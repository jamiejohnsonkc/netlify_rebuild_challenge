/** @jsx jsx */
import { Styled, jsx, ThemeProvider } from "theme-ui"
import React, { useState } from "react"
import PropTypes from "prop-types"

const NavBar = (props) => (
  <Styled.div
    {...props}
    as="nav"
    className="navBar"
    sx={{
      display: ["flex"],
      position: ["sticky", "relative"],
      zIndex: 2,

      top: ["0", "null"],
      left: ["0", "null"],
      right: ["0", "null"],
      left: ["0", "null"],
      listStyleType: "none",

      alignSelf: "center",
      alignItems: "center",
      variant: "layout.navBar",
    }}
  >
    {props.children}
  </Styled.div>
)

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
