/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"
import Grid_1r_25_75 from "./Grid_1r_25_75"

export default {
  title: "Grid_1r_25_75",
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
