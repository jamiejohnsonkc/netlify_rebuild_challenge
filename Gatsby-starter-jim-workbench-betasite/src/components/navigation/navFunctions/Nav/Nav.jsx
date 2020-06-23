/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Nav = (props) => (
  <nav
    className="Nav"
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
      variant: "nav.nav",
    }}
  >
    {props.children}
  </nav>
)

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
