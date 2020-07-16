/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"

export default {
  title: "Grid_1r_66_33",
}

export const standard = () => (
  <Grid columns={[2, "2fr 1fr"]}>
    <Box display="grid" bg="primary">
      box 1 content
    </Box>
    <Box display="grid" bg="secondary">
      box 2 content
    </Box>
  </Grid>
)
