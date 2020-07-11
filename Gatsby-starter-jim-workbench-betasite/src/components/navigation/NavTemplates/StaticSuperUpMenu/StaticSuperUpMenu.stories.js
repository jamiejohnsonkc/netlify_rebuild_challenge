/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import StaticSuperUpMenu from "./StaticSuperUpMenu"

export default {
  title: "StaticSuperUpMenu",
}

export const standard = () => (
  <>
    <Box bg="gray">
      <StaticSuperUpMenu />
    </Box>
  </>
)
