/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Grid1r3c = (props) => (
  <div
    as="Section"
    {...props}
    sx={{
      //   variant: "layout.intro",
      display: "grid",
      //   gridTemplateColumns: "1fr",
      //   gridTemplateRows: "1fr",
      background: "blue",
      alignItems: "center",
      height: "50vh",
      bg: "primary",
    }}
  >
    <Container>
      <Box display="grid" bg="secondary">
        Box
      </Box>
    </Container>
  </div>
)

Grid1r3c.propTypes = {}

Grid1r3c.defaultProps = {}

export default Grid1r3c
