/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"
import Grid25_75 from "./Grid25_75"

export default {
  title: "Layout Elements/Css Grids/Columns/variable [2, `1fr, 3fr`]",
}

export const standard = () => (
  <Grid columns={[2, "1fr 3fr"]}>
    <Box display="grid" bg="primary">
      Box 1 content
    </Box>
    <Box display="grid" bg="secondary">
      Box 2 content
    </Box>
  </Grid>
)
