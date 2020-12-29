import { jsx, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Header = (props) => (
  <Box
    className="Header"
    {...props}
    sx={{
      position: ["sticky", "sticky", "relative", "relative"],
      zIndex: [3],
      top: [0, 0],
      left: [0, 0],
    }}
  >
    {props.children}
  </Box>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
