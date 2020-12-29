/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const N4colGrid = (props) => (
  <Grid width={[128, null, 192]}>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
    <Box bg="primary">Box</Box>
    <Box bg="muted">Box</Box>
  </Grid>
)

N4colGrid.propTypes = {}

N4colGrid.defaultProps = {}

export default N4colGrid

{
  /*
this should be labeled by "item"
*/
}
