/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Section from "./Section"

export default {
  title: "Layout Elements/Containers/Section",
}

export const standard = (props) => (
  <Section {...props} sx={{ bg: "accent", alignItems: "center" }}>
    Section Container
  </Section>
)
