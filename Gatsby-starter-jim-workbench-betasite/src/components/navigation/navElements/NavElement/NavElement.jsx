/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const NavElement = (props) => <li {...props}>{props.children}</li>

NavElement.propTypes = {}

NavElement.defaultProps = {}

export default NavElement
