/** @jsx jsx */
import { jsx, Grid, Box, Container, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../base/Icon"
import { color } from "jim-workbench-custom-themes/colors"
import Pancake from "../../../layout/Pancake"
import ComparisonTable from "../../../templates/ComparisonTable"

const ProComparison = (props) => (
  <Pancake
    {...props}
    sx={{
      variant: "layout.section",
    }}
  >
    {/* <ColorModeCycler />
      <ColorModeToggle /> */}
    <Container>
      <div
        {...props}
        sx={{
          position: "relative",
          boxSizing: "content-box",
          margin: `0 auto`,

          // width: "100%",
          padding: "0 1em",
          maxWidth: ["45em", "45em", "60em", "60em"],
        }}
      >
        <Styled.h1
          {...props}
          sx={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          Netlify Edge vs Standard CDN
        </Styled.h1>
        <Styled.h3
          {...props}
          sx={{
            display: "grid",
            justifyContent: "center",
            mb: 0,
            color: `${color.gray3}`,
          }}
        >
          Go beyond a standard CDN with even less to maintain.
        </Styled.h3>
        <ComparisonTable />
      </div>
    </Container>
  </Pancake>
)

ProComparison.propTypes = {}

ProComparison.defaultProps = {}

export default ProComparison
