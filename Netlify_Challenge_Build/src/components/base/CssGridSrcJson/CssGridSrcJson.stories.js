import React from "react"
import CssGridSrcJson from "./CssGridSrcJson"

export default {
  title: "Templates/Dynamic Content/CssGridSrcJson",
}

export const standard = (props) => (
  <CssGridSrcJson gridWidth={null} gridGap={2} gridColumns={[2, null, 4]} />
)
