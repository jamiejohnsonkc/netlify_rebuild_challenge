/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const BackgroundSvg = (props) => (
  <div
    {...props}
    sx={{
      position: "absolute",
      //   zIndex: "-1",
      overflow: "hidden",
      height: "100vh",
      width: "100%",
      top: 0,
      left: 0,
    }}
    css={props.svgBackground}
  >
    {props.children}
  </div>
)

BackgroundSvg.propTypes = {}

BackgroundSvg.defaultProps = {}

export default BackgroundSvg
