/** @jsx jsx */
import { jsx, Grid, Box, colors } from "theme-ui"
import React from "react"
import Grid_1r_3c from "./Grid_1r_3c"

export default {
  title: "Grid_1r_3c",
}

export const standard = () => (
  <Grid columns={[3, "1fr 1fr 1fr"]}>
    <Box bg="gray">Box1 Content</Box>
    <Box bg="gray">Box2 Content</Box>
    <Box bg="gray">Box3 Content</Box>
  </Grid>
)
