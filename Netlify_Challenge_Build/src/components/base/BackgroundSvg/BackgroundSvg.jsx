/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const BackgroundSvg = (props) => (
  <div
    {...props}
    sx={{
      position: "absolute",
      zIndex: "-1",
      height: "100vh",
      width: "100%",
      top: 0,
      left: 0,
    }}
  >
    {props.children}
  </div>
)

BackgroundSvg.propTypes = {}

BackgroundSvg.defaultProps = {}

export default BackgroundSvg
