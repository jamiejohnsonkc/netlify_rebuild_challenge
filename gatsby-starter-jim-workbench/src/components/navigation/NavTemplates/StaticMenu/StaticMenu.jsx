/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import NavLink from "../../navElements/NavLink"

import PropTypes from "prop-types"

const StaticMenu = (props) => (
  <ul
    // className="mainNavUl"
    sx={{
      listStyle: "none",

      cursor: "pointer",
      // variant: "layout.mainNavUl",
    }}
  >
    <li
      // className="mainNavListItem"
      sx={{
        display: "block",
        position: "relative",

        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <NavLink href={link.link}>{link.name}</NavLink>
    </li>
  </ul>
)

StaticMenu.propTypes = {}

StaticMenu.defaultProps = {}

export default StaticMenu
