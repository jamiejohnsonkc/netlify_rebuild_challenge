/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ProComparison from "./ProComparison"

export default {
  title: "Production/ProComparison",
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
    <ProComparison />
  </div>
)
