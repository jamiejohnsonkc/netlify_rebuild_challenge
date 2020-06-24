/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../base/Icon"

const NavLinkIcon = (props) => (
  <Icon
    iconName={props.iconName}
    variant={props.variant}
    sx={{
      verticalAlign: "middle",
      width: "1.25em",
    }}
  />
)

NavLinkIcon.propTypes = {}

NavLinkIcon.defaultProps = {}

export default NavLinkIcon
