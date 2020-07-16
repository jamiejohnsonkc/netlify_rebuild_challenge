/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const GridSandBox = (props) => (
  <div
    sx={{
      display: "grid",
      gridGap: 4,
      gridTemplateColumns: ["auto", "1fr 256px"],
    }}
  >
    <main
      {...props}
      sx={{
        bg: "red",
      }}
    >
      Main
    </main>
    <aside
      {...props}
      sx={{
        bg: "yellow",
      }}
    >
      Sidebar
    </aside>
  </div>
)

GridSandBox.propTypes = {}

GridSandBox.defaultProps = {}

export default GridSandBox
