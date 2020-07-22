/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui"
import React from "react"

export default {
  title: "F4colGrid",
}

export const standard = (props) => (
  <Grid gap={2} columns={[2, "1fr 2fr"]}>
    <Box bg="primary">Box1 Content</Box>
    <Box bg="secondary">Box2 Content</Box>
    <Box bg="primary">Box3 Content</Box>
    <Box bg="secondary">Box4 Content</Box>
  </Grid>
)
