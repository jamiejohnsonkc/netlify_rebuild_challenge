/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Navbox = (props) => (
  <Flex
    sx={{
      variant: "layout.navBox",
    }}
  >
    {props.children}
  </Flex>
)

Navbox.propTypes = {}

Navbox.defaultProps = {}

export default Navbox
