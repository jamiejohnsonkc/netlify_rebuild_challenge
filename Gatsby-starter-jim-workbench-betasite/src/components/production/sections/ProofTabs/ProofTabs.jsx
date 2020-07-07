/** @jsx jsx */
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
  Container,
} from "theme-ui"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import React from "react"
import Button from "../../../base/Button"
import Logo1 from "../../../../svg/assets/logo-1.svg"
import Logo2 from "../../../../svg/assets/logo-2.svg"
import Logo3 from "../../../../svg/assets/logo-3.svg"
import Logo4 from "../../../../svg/assets/logo-4.svg"
import Logo5 from "../../../../svg/assets/logo-5.svg"
import CtaLink from "../../../base/CtaLink"
import styled from "@emotion/styled"
import { color } from "../../../../../../jim-workbench-custom-themes/colors"
import { lighten } from "@theme-ui/color"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import ProofTabsCafe from "../../../hooks/ProofTabsCafe"
import ProofTabsCombine from "../../../hooks/ProofTabsCombine"
import ProofTabsPlanning from "../../../hooks/ProofTabsPlanning/ProofTabsPlanning"
import ProofTabsSparks from "../../../hooks/ProofTabsSparks"
import ProofTabsWoodworking from "../../../hooks/ProofTabsWoodworking"
import { Img } from "gatsby-image"
import TabPanelContent from "../../../templates/TabsPanel/TabPanelContent/TabPanelContent"

const ImageWrapper = (props) => (
  <Box
    {...props}
    sx={{
      "> .gatsby-image-wrapper": {
        borderRadius: 6,
      },
    }}
  />
)

const TabButton = ({ width, padding, grid, ...props }) => (
  <Button
    {...props}
    className="tabButton"
    variant="pill.grayMark"
    sx={{
      width: "100%",
      padding: 0,
      justifyContent: "center",
      alignContent: "center",
      mb: [2, 4, 4, 4],
      border: "none",
      outline: "none",
    }}
  />
)

const tablistStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  display: "grid",
  gridTemplateColumns: [
    "1fr",
    "1fr 1fr 1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr 1fr",
    "1fr 1fr 1fr 1fr 1fr",
  ],
  gap: 2,
  borderBottom: 0,
  width: "100%",
  listStyle: "none",
}

const MyTabList = (props) => (
  <>
    <TabList
      {...props}
      sx={{
        paddingLeft: 0,
        marginBottom: [4, 0, 0, 0],
      }}
    >
      <Grid
        columns={[1, 5, 5, 5]}
        gap={(1, 2, 2, 2)}
        {...props}
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          borderBottom: 0,
          listStyle: "none",
        }}
      >
        {props.children}
      </Grid>
    </TabList>
  </>
)

const MyTab = ({ iconName, disabled, selected, ...props }) => (
  <>
    <Tab
      className="MyTab"
      disabled={disabled}
      selected={selected}
      disabledClassName="MyTabInactive"
      selectedClassName="MyTabActive"
      {...props}
      sx={{
        border: "none",
        outline: "none",
        "& > button > svg": {
          alignSelf: "center",
          flex: 1,
        },
        "&.MyTabActive": {
          border: "none",
          outline: "none",

          "& > button": {
            background: lighten("highlight", 0.52),
            border: "none",
          },
          "& > button > svg > .logoIpsum": {
            fill: "highlight",
          },
        },
      }}
    >
      <TabButton>{props.children}</TabButton>
    </Tab>
  </>
)
MyTab.tabsRole = "Tab"
MyTabList.tabsRole = "TabList"

const ProofTabs = ({ data, props }) => (
  <Pancake
    {...props}
    sx={{
      variant: "layout.section",
    }}
  >
    {/* <ColorModeCycler />
      <ColorModeToggle /> */}
    <Container
      {...props}
      sx={{
        boxShadow: "test5",
        py: 4,
        // px: 6,
      }}
    >
      <Tabs {...props} sx={{}}>
        <MyTabList>
          <MyTab>
            <Logo1
              {...props}
              sx={{
                maxWidth: "6em",
              }}
            />
          </MyTab>
          <MyTab>
            <Logo2
              {...props}
              sx={{
                maxWidth: "6em",
              }}
            />
          </MyTab>
          <MyTab>
            <Logo3
              {...props}
              sx={{
                maxWidth: "6em",
              }}
            />
          </MyTab>
          <MyTab>
            <Logo4
              {...props}
              sx={{
                // maxWidth: "4em",
                // height: "2em",
                width: "auto",
                maxHeight: "1.75em",
              }}
            />
          </MyTab>
          <MyTab {...props}>
            <Logo5
              {...props}
              sx={{
                maxWidth: "5.75em",
              }}
            />
          </MyTab>
        </MyTabList>
        <TabPanel>
          <TabPanelContent
            tabsVisual={<ProofTabsCafe />}
            textHeadline="Deliver Better Value at Higher Rates"
            textBody="Laboris do sit nostrud pariatur cillum fugiat ullamco consequat veniam aliquip commodo incididunt eu ad. Ipsum deserunt reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum ullamco officia"
            tabsCtaLinkTo="/"
            metric1="$86M"
            metricCaption1="Annual Growth"
            metric2="98%"
            metricCaption2="Customer Satisfaction"
          />
        </TabPanel>
        <TabPanel>
          <TabPanelContent
            tabsVisual={<ProofTabsSparks />}
            textHeadline="Cut Lead Times And Accelerate Sales"
            textBody="Laboris do sit nostrud pariatur cillum fugiat ullamco consequat veniam aliquip commodo incididunt eu ad. Ipsum deserunt reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum ullamco officia"
            tabsCtaLinkTo="/"
            metric1="51%"
            metricCaption1="Close Rate"
            metric2="100%"
            metricCaption2="Up Time"
          />
        </TabPanel>
        <TabPanel>
          <TabPanelContent
            tabsVisual={<ProofTabsCombine />}
            textHeadline="Engage When and Where It Matters"
            textBody="Laboris do sit nostrud pariatur cillum fugiat ullamco consequat veniam aliquip commodo incididunt eu ad. Ipsum deserunt reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum ullamco officia"
            tabsCtaLinkTo="/"
            metric1="15%"
            metricCaption1="YOY Revenue"
            metric2="10%"
            metricCaption2="Site Traffic"
          />
        </TabPanel>
        <TabPanel>
          <TabPanelContent
            tabsVisual={<ProofTabsPlanning />}
            textHeadline="Break Down Silos. Optimize Workflows"
            textBody="Laboris do sit nostrud pariatur cillum fugiat ullamco consequat veniam aliquip commodo incididunt eu ad. Ipsum deserunt reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum ullamco officia"
            tabsCtaLinkTo="/"
            metric1="22%"
            metricCaption1="SEO ROI"
            metric2="5%"
            metricCaption2="Avg Customer Value"
          />
        </TabPanel>
        <TabPanel>
          <TabPanelContent
            tabsVisual={<ProofTabsWoodworking />}
            textHeadline="Empower customer-facing personnel"
            textBody="Laboris do sit nostrud pariatur cillum fugiat ullamco consequat veniam aliquip commodo incididunt eu ad. Ipsum deserunt reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum ullamco officia"
            tabsCtaLinkTo="/"
            metric1="-10%"
            metricCaption1="Customer Acquisition Cost"
            metric2="6%"
            metricCaption2="New Customer Creation"
          />
        </TabPanel>
      </Tabs>
    </Container>
  </Pancake>
)

ProofTabs.propTypes = {}

ProofTabs.defaultProps = {}

export default ProofTabs
