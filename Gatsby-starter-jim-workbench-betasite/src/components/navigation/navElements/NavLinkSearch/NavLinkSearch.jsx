/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLinkSearch = ({
  width,
  height,
  fill,
  color,
  padding,
  margin,
  bg,
  ...props
}) => (
  <Link
    {...props}
    sx={{
      bg,
      width,
      height,
      fill,
      color,
      padding,
      margin,
      variant: "links.navLinkSearch",
    }}
  >
    {props.children}
  </Link>
)

NavLinkSearch.propTypes = {}

NavLinkSearch.defaultProps = {}

export default NavLinkSearch
