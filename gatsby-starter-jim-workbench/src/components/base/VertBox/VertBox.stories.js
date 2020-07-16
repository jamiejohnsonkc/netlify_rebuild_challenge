/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import VertBox from "./VertBox"

export default {
  title: "VertBox",
}

export const standard = () => (
  <VertBox
    sx={{
      backgrounColor: "accent",
    }}
  />
)
