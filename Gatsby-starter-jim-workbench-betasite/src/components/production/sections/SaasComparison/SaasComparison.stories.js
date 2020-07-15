/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import SaasComparison from "./SaasComparison"

export default {
  title: "SaasComparison",
}

export const standard = (props) => (
  <div
    {...props}
    sx={{
      maxWidth: "1000px",
      display: "flex",
      overflowX: "scroll",
    }}
  >
    <SaasComparison />
  </div>
)
