/** @jsx jsx */
import React from "react"

//!
//! This component is not configured for reuse. See prooftabs in production components of the pro spec project
//!

import {
  jsx,
  Box,
  Styled,
  Text,
  Grid,
  space,
  padding,
  margin,
  css,
  ThemeProvider,
} from "theme-ui"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import "react-tabs/style/react-tabs.css"
import Button from "../../../base/Button"
import CtaLink from "../../../base/CtaLink"
import styled from "@emotion/styled"
import palette from "@palette"
import { lighten } from "@theme-ui/color"

const TabPanelContent = ({
  height,
  width,
  bg,
  color,
  padding,
  margin,
  ...props
}) => (
  <Grid
    {...props}
    columns={(5, "1fr 2fr 1fr 1fr")}
    sx={{
      height,
      width,
      bg,
      color,
      padding,
      margin,
    }}
  />
)

const TabButton = ({ width, padding, grid, ...props }) => (
  <Button
    {...props}
    variant="pill.grayMark"
    sx={{
      width: "100%",
      padding: 0,
      justifyContent: "center",
      alignContent: "center",
      mb: 4,
      alignItems: "center",
    }}
  />
)

const tablistStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr 1fr 1fr 1fr 1fr"],
  gap: 2,
  borderBottom: 0,
  width: "100%",
  listStyle: "none",
}

export default (props) => (
  <Tabs
    {...props}
    sx={{
      ".react-tabs__tab--selected": {
        backgroundColor: "transparent",
        border: "none",
        "& > div > button": {
          background: lighten("highlight", 0.51),
        },
        "& > div > button > svg > .logoIpsum": {
          fill: (props) => ({ color: color.primay }),
        },
      },
    }}
  >
    <TabList style={tablistStyle}>
      {/* <TabList> */}
      <Tab>
        <Box {...props} sx={{}}>
          <TabButton>Button 1</TabButton>
        </Box>
      </Tab>
      <Tab>
        <Box {...props} sx={{}}>
          <TabButton>Button 2</TabButton>
        </Box>
      </Tab>
      <Tab>
        <Box {...props} sx={{}}>
          <TabButton>Button 3</TabButton>
        </Box>
      </Tab>
      <Tab>
        <Box {...props} sx={{}}>
          <TabButton>Button 4</TabButton>
        </Box>
      </Tab>
      <Tab>
        <Box {...props} sx={{}}>
          <TabButton>Button 5</TabButton>
        </Box>
      </Tab>
    </TabList>

    <TabPanel>Panel 1 content</TabPanel>
    <TabPanel>Panel 2 content</TabPanel>
    <TabPanel>Panel 3 content</TabPanel>
    <TabPanel>Panel 4 content</TabPanel>
    <TabPanel>Panel 5 content</TabPanel>
  </Tabs>
)
