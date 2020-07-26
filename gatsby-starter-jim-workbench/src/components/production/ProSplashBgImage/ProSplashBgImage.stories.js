/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ProSplashBgImage from "./ProSplashBgImage"

export default {
  title: "ProSplashBgImage",
}

export const standard = (props) => (
  <div
    {...props}
    sx={{
      height: "100%",
      width: "100%",
    }}
  >
    <ProSplashBgImage />
  </div>
)
