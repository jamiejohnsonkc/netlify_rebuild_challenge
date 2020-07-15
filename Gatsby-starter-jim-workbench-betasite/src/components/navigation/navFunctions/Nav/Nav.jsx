/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

//* Nav is the top-level wrapper for the site's menu elements.

// Nav
//  Navbar
//    Navbox
//    |-Menu--desktop (MainMenu)
//            |-MegaNav SubMenu
//    |-menu--mobile

const Nav = (props) => (
  <nav
    className="Nav"
    sx={{
      position: ["sticky", "sticky", "relative"],

      zIndex: "2",
      "@media (max-width: 768px)": {
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
