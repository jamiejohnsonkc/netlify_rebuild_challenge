/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const JumpLink = (props) => (
  <Link
    {...props}
    className="jumpLink"
    to={props.to}
    sx={{
      variant: "links.jumpLink",
    }}
  >
    {props.children}
  </Link>
)

JumpLink.propTypes = {}

JumpLink.defaultProps = {}

export default JumpLink
