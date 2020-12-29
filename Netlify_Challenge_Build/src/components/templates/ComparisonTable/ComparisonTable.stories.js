/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ComparisonTable from "./ComparisonTable"

export default {
  title: "Templates/ComparisonTable",
}

export const standard = (props) => (
  <div
    {...props}
    sx={{
      position: "relative",
      boxSizing: "content-box",
      margin: `0 auto`,
      width: "45rem",
    }}
  >
    <ComparisonTable />
  </div>
)
