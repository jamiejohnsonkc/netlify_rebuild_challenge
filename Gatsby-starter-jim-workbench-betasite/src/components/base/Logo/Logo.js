/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import React from "react"
import Icon from "../Icon"
import Netlify from "../../../svg/assets/Netlify_logo.svg"
import PropTypes from "prop-types"

const Logo = (props) => (
  <div {...props}>
    <Netlify />
  </div>
)

Logo.propTypes = {
  // bla: PropTypes.string,
}

Logo.defaultProps = {
  // bla: 'test',
}

export default Logo
