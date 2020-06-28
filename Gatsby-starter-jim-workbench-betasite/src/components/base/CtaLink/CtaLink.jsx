/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Icon from "../../base/Icon"

const CtaLink = ({ flex, width, height, color, ...props }) => (
  <>
    <Link
      {...props}
      to={props.to}
      sx={{
        flex,
        width,
        height,
        color,
      }}
    >
      {props.linkText}
      <Icon
        iconName={props.iconName}
        size={props.iconSize}
        color={props.iconColor}
        padding={props.iconMargin}
      />
    </Link>
  </>
)

CtaLink.propTypes = {}

CtaLink.defaultProps = {}

export default CtaLink
