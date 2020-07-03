/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

//* Navbox is the container housing the desktop and mobile nav components

const Navbox = (props) => (
  <div
    {...props}
    sx={{
      variant: "nav.navBox",
    }}
    className="navBox"
  >
    {/* {props.children} */}
    {props.children}
  </div>
)

Navbox.propTypes = {}

Navbox.defaultProps = {}

export default Navbox
