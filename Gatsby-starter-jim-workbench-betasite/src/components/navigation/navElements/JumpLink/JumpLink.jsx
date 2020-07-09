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

{
  /* <Styled.h2 as="div">Hello!</Styled.h2>

This can also be used to style components like the Gatsby Link component to match other links.

<Styled.a as={Link} to="/about">
  About
</Styled.a> */
}
