/** @jsx jsx */
import { jsx, Grid, Box, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import animation from "../../../../../customStyles/exThemeUi/animation.js"

const Grid75Text25Visual = (props) => (
  <Grid
    {...props}
    py={4}
    my={4}
    columns={[1, 1, "3fr 1fr", "3fr 1fr"]}
    margin={[`0 auto`, 0]}
    sx={{
      alignItems: "center",
    }}
  >
    <Box
      {...props}
      {...animation.slideUp2}
      display="grid"
      paddingRight={[0, 0, 2, 2]}
      sx={{
        order: [2, 2, 1, 1],
      }}
    >
      <Styled.h3>{props.header}</Styled.h3>
      <Text
        {...props}
        sx={{
          variant: "styles.p2",
        }}
      >
        {props.body}
      </Text>
    </Box>
    <Box
      {...props}
      {...animation.slideUp1}
      display="grid"
      sx={{
        order: [1, 1, 2, 2],
        textAlign: ["center", "center", "unset", "unset"],
      }}
    >
      {props.visual}
    </Box>
  </Grid>
)

Grid75Text25Visual.propTypes = {}

Grid75Text25Visual.defaultProps = {}

export default Grid75Text25Visual
