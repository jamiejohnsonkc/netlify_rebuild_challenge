/** @jsx jsx */
import { jsx, Grid, Box, Container, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../base/Icon"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import Pancake from "../../../layout/Pancake"
import ComparisonTable from "../../../templates/ComparisonTable"

// const ColHead = ({ width, padding, grid, ...props }) => (
//   <Box
//     {...props}
//     backgroundColor={props.backgroundColor}
//     sx={{
//       variant: "styles.h3",
//       py: 3,
//       display: "grid",
//       justifyContent: "center",
//       alignContent: "center",
//       marginBottom: 0,
//       //   gridArea: "header",
//     }}
//   />
// )

// const RowHead = ({ width, padding, grid, color, ...props }) => (
//   <Box
//     {...props}
//     backgroundColor={props.backgroundColor}
//     sx={{
//       // width: "100%",
//       // padding: 0,
//       display: "grid",
//       justifyContent: "start",
//       alignContent: "center",
//       paddingLeft: 4,
//       paddingTop: 0,
//       paddingBottom: 0,
//       height: "4em",
//     }}
//   />
// )

// const Content = ({ width, padding, grid, ...props }) => (
//   <Box
//     {...props}
//     backgroundColor={props.backgroundColor}
//     sx={{
//       // width: "100%",
//       // padding: 0,
//       display: "grid",
//       justifyContent: "center",
//       alignContent: "center",
//       alignItems: "center",
//       position: "relative",
//       paddingTop: 0,
//       paddingBottom: 0,
//       height: "4em",

//       //   gridArea: "dataCell",
//       //   border: `solid thin white`,
//     }}
//   />
// )

// const DataIcon = (props) => (
//   <Icon
//     {...props}
//     name={props.iconName}
//     size="1.5em"
//     sx={{
//       color: "primary",
//     }}
//   />
// )

const SaasComparison = (props) => (
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
          maxWidth: ["45em", "45em", "unset", "unset"],
        }}
      >
        {/*
      <Grid
        columns={["200px 200px 200px", "1fr 1fr 1fr"]}
        rows={["1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"]}
        gap={0}
        width="1000px"
        {...props}
        sx={{
          borderRadius: 12,
          boxShadow: "test5",
        }}
      >
        <ColHead
          {...props}
          sx={{
            justifyContent: "start",
            paddingLeft: 4,
          }}
        >
          Comparison Point
        </ColHead>
        <ColHead>CDN</ColHead>
        <ColHead>Netlify Edge</ColHead>
        <Grid
          width="1000px"
          rows="repeat(7, 64px)"
          gap={0}
          sx={{ bg: "muted" }}
        >
          <RowHead>Supports static assets</RowHead>
          <RowHead backgroundColor={color.white}>
            Works without an origin
          </RowHead>
          <RowHead>Can prerender pages / run builds</RowHead>
          <RowHead backgroundColor={color.white}>Git-integrated CI/CD</RowHead>
          <RowHead>Deploys</RowHead>
          <RowHead backgroundColor={color.white}>Rollbacks</RowHead>
          <RowHead>Cache invalidation</RowHead>
        </Grid>
        <Grid
          width="1000px"
          rows="repeat(7, 64px)"
          gap={0}
          sx={{ bg: "muted" }}
        >
          <Content>
            <DataIcon iconName="Check" />
          </Content>
          <Content backgroundColor={color.white}>
            <DataIcon iconName="CheckNo" />
          </Content>
          <Content>
            <DataIcon iconName="CheckNo" />
          </Content>
          <Content backgroundColor={color.white}>
            <DataIcon iconName="CheckNo" />
          </Content>
          <Content>Manual</Content>
          <Content backgroundColor={color.white}>Manual</Content>
          <Content>Tricky (some risk of stale content)</Content>
        </Grid>
        <Grid
          width="1000px"
          rows="repeat(7, 64px)"
          gap={0}
          sx={{ bg: "muted" }}
        >
          <Content>
            <DataIcon iconName="Check" />
          </Content>
          <Content backgroundColor={color.white}>
            <DataIcon iconName="Check" />
          </Content>
          <Content>
            <DataIcon iconName="Check" />
          </Content>
          <Content backgroundColor={color.white}>
            <DataIcon iconName="Check" />
          </Content>
          <Content>Automatic</Content>
          <Content backgroundColor={color.white}>Automatic</Content>
          <Content>Instant (no risk of stale content)</Content>
        </Grid>
        {/* <Grid rows="repeat(auto-fill, 1fr)" gap={3} sx={{ bg: "muted" }}>
      <Box>Grid 2</Box>
      <Box>Grid 2</Box>
    </Grid>
      </Grid> */}
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

SaasComparison.propTypes = {}

SaasComparison.defaultProps = {}

export default SaasComparison
