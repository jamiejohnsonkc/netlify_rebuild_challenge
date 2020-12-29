/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import Ul from "./Ul"

export default {
  title: "Base/Content Blocks/Unordered List",
}

export const standard = (props) => (
  <Box
    {...props}
    sx={{
      width: "250px",
    }}
  >
    <Ul />
  </Box>
)
