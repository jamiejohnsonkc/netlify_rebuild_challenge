/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const MainNav = (props) => (
  <nav
    className="MainNav"
    sx={{
      position: "relative",

      zIndex: "2",
      "@media (max-width: 768px)": {
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        left: "0",
      },
      variant: "layout.mainNav",
    }}
  >
    {props.children}
  </nav>
)

MainNav.propTypes = {}

MainNav.defaultProps = {}

export default MainNav
