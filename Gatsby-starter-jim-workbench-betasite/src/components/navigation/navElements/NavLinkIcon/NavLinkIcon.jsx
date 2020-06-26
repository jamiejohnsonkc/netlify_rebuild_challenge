/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../base/Icon"
import { lighten } from "@theme-ui/color"

const NavLinkIcon = (props) => (
  <Icon
    iconName={props.iconName}
    variant={props.variant}
    sx={{
      verticalAlign: "middle",
      width: "1.25em",
      color: lighten("navMenuItem", 0.1),
    }}
  />
)

NavLinkIcon.propTypes = {}

NavLinkIcon.defaultProps = {}

export default NavLinkIcon
