/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import Grid_1r_33_66 from "./Grid_1r_33_66"

export default {
  title: "Layout Elements/Css Grids/Columns/variable [2, `1fr, 2fr`]",
}

export const standard = () => (
  <Grid_1r_33_66>
    <Box bg="primary">Box1 Content</Box>
    <Box bg="secondary">Box2 Content</Box>
    <Box bg="primary">Box3 Content</Box>
    <Box bg="secondary">Box4 Content</Box>
  </Grid_1r_33_66>
)
