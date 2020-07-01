/** @jsx jsx */
import { jsx, Box, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../Pancake"

const Grid_1r_25_75 = (props) => (
  <Grid py={4} my={4} columns={[2, "1fr 3fr"]}>
    <Box display="grid">{props.visual}</Box>
    <Box display="grid" paddingRight={4}>
      <Styled.h2>{props.header}</Styled.h2>
      <Text
        {...props}
        sx={{
          variant: "styles.d3",
        }}
      >
        {props.body}
      </Text>
    </Box>
  </Grid>
)

Grid_1r_25_75.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Grid_1r_25_75.defaultProps = {}

export default Grid_1r_25_75
