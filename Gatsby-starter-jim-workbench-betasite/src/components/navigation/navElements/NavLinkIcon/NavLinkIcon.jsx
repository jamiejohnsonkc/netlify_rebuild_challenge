/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../base/Icon"
import { darken } from "@theme-ui/color"

const NavLinkIcon = (props) => (
  <Icon
    iconName={props.iconName}
    variant={props.variant}
    sx={{
      verticalAlign: "middle",
      width: "1.25em",
      color: darken("navMenuItem", 0.35),
      display: ["none", "none", "inline-block", "inline-block"],
    }}
  />
)

NavLinkIcon.propTypes = {}

NavLinkIcon.defaultProps = {}

export default NavLinkIcon
