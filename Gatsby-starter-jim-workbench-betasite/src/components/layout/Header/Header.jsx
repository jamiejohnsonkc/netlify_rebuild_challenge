import { jsx, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Header = (props) => <Box>{props.children}</Box>

Header.propTypes = {}

Header.defaultProps = {}

export default Header
