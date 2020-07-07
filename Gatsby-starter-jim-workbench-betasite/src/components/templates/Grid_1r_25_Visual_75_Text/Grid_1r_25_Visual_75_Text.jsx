/** @jsx jsx */
import { jsx, Box, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid_1r_25_Visual_75_Text = (props) => (
  <Grid
    py={4}
    my={4}
    columns={[1, 1, "1fr 3fr", "1fr 3fr"]}
    margin={[`0 auto`, 0]}
  >
    <Box display="grid">{props.visual}</Box>
    <Box display="grid" paddingRight={(0, 0, 4, 4)}>
      <Styled.h3>{props.header}</Styled.h3>
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

Grid_1r_25_Visual_75_Text.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

Grid_1r_25_Visual_75_Text.defaultProps = {}

export default Grid_1r_25_Visual_75_Text
