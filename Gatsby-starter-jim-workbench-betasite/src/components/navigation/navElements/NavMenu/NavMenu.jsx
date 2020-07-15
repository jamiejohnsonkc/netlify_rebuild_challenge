/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavMenu = (props) => (
  <ul
    {...props}
    sx={{
      listStyle: "none",
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: [
        "space-around",
        "space-around",
        "space-between",
        "space-between",
      ],
      flexDirection: ["column", "column", "row", "row"],
      width: "100%",
      // variant: "nav.navMenu",
    }}
    // className="navMenu"
  />
)

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
