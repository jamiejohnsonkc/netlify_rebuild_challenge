/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { content } from "./GridData.json"

const CssGridSrcJson = (props) => (
  <>
    <Grid
      width={props.gridWidth}
      gap={props.gridGap}
      columns={props.gridColumns}
    >
      {content.map((data, index) => {
        return (
          <Box
            {...props}
            sx={{
              paddingBottom: 2,
            }}
            key={`content_item_${index}`}
          >
            {data.item}
          </Box>
        )
      })}
    </Grid>
  </>
)

CssGridSrcJson.propTypes = {}

CssGridSrcJson.defaultProps = {}

export default CssGridSrcJson
