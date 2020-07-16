/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavLink } from "theme-ui"
{
  /*
import StaticNavbarLinks from "../Nav/StaticNavbarLinks"
*/
}

const Footer = () => (
  <Styled.div
    as="footer"
    sx={{
      variant: "layout.footer",
    }}
  >
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // maxWidth: 768,
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      {/*
      <StaticNavbarLinks />
      */}
      <div sx={{ mx: "auto" }} />
      <div sx={{ variant: "text.legal", p: 2 }}>
        © {new Date().getFullYear()} Jamie Johnson
      </div>
    </div>
  </Styled.div>
)
Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
