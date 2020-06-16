/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import StaticNavbarLinks from "./StaticNavbarLinks"

export default {
  title: "StaticNavbarLinks",
}

export const standard = () => (
  <div
    sx={{
      bg: "#000",
    }}
  >
    <StaticNavbarLinks />
  </div>
)
