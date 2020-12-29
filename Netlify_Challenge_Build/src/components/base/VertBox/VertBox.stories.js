/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import VertBox from "./VertBox"

export default {
  title: "Layout Elements/Formats/VertBox",
}

export const standard = () => (
  <VertBox
    sx={{
      backgrounColor: "accent",
      transformOrigin: ".6em .6em",
      fontSize: "2em",
      textTransform: "uppercase",
      fontWeight: "800",
      fontFamily: "arial",
      zIndex: 3,
      letterSpacing: "tight",
      color: "muted",
      textShadow: "1px 1px 2px black",
    }}
  >
    Vertical Text Elements
  </VertBox>
)
