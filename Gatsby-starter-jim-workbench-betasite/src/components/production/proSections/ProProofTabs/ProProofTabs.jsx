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

import Loblaws from "../../../../svg/assets/loblaws.svg"
import Cornerstone from "../../../../svg/assets/cornerstone.svg"
import Nike from "../../../../svg/assets/nike.svg"
import Beckham from "../../../../svg/assets/beckham.svg"
import Citrix from "../../../../svg/assets/citrix.svg"
import CtaLink from "../../../base/CtaLink"
import styled from "@emotion/styled"
import { color } from "@colors"
import { lighten } from "@theme-ui/color"
import PropTypes from "prop-types"
import { Img } from "gatsby-image"
import TabPanelContent from "../../../templates/TabsPanel/TabPanelContent/TabPanelContent"
import NikeImage from "../../proHooks/imageHooks/NikeImage"
import LoblawsImage from "../../proHooks/imageHooks/LoblawsImage"
import BeckhamImage from "../../proHooks/imageHooks/BeckhamImage"
import CornerstoneImage from "../../proHooks/imageHooks/CornerstoneImage"
import CitrixImage from "../../proHooks/imageHooks/CitrixImage"
import ProPancake from "../../proLayout/ProPancake"
import gradients from "@gradients"

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
      transition: "all 0.3s ease-in",
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
      selectedTabPanelClassName="MyTabPanelSelected"
      {...props}
      sx={{
        border: "none",
        outline: "none",

        "& > button > svg": {
          alignSelf: "center",
          flex: 1,
        },
        "&.MyTab": {
          "#proofLogo": {
            fill: `${color.gray3}`,
          },
        },
        "&.MyTabActive": {
          border: "none",
          outline: "none",

          "& > button": {
            // background: lighten("highlight", 0.52),
            background: gradients.defined.highlight.background,
            border: "none",
          },
          "& > button > svg > proofLogo": {
            fill: "highlight",
          },
          "#proofLogo": {
            fill: "highlight",
          },
        },
      }}
    >
      <TabButton>{props.children}</TabButton>
    </Tab>
  </>
)

const MyTabPanel = ({ height, width, bg, ...props }) => {
  return (
    <TabPanel {...props} selectedClassName="ActiveTabPanel">
      {props.children}
    </TabPanel>
  )
}

MyTab.tabsRole = "Tab"
MyTabList.tabsRole = "TabList"
MyTabPanel.tabsRole = "TabPanel"

const ProProofTabs = ({ data, props }) => (
  <ProPancake>
    <Container
      {...props}
      sx={{
        boxShadow: "test5",
        py: 4,
        borderRadius: 6,
        // px: 6,
      }}
    >
      <Tabs
        {...props}
        sx={{
          minHeight: "26em",
        }}
      >
        <MyTabList>
          <MyTab>
            <Loblaws
              {...props}
              sx={{
                maxWidth: "6em",
              }}
            />
          </MyTab>
          <MyTab>
            <Nike
              {...props}
              sx={{
                maxWidth: "4em",
              }}
            />
          </MyTab>
          <MyTab>
            <Beckham
              {...props}
              sx={{
                maxWidth: "8em",
              }}
            />
          </MyTab>
          <MyTab>
            <Cornerstone
              {...props}
              sx={{
                // maxWidth: "4em",
                // height: "2em",
                maxWidth: "6em",
                // maxHeight: "1.75em",
              }}
            />
          </MyTab>
          <MyTab {...props}>
            <Citrix
              {...props}
              sx={{
                maxWidth: "4em",
              }}
            />
          </MyTab>
        </MyTabList>
        <MyTabPanel>
          <TabPanelContent
            tabsVisual={<LoblawsImage />}
            textHeadline="Canada's largest grocer delivers sites 10x faster, while saving money"
            textBody="Netlify helps the Loblaw engineering productivity team achieve its mission of reducing toil, increasing happiness and getting sites launched fast."
            tabsCtaLinkTo="/"
            metric1="92%"
            metricCaption1="Better performance"
            metric2="$38k"
            metricCaption2="Monthly cost savings"
          />
        </MyTabPanel>
        <MyTabPanel>
          <TabPanelContent
            tabsVisual={<NikeImage />}
            textHeadline="Matter Supply delivered Emmy-winning “dream crazy” campaign for Nike in record time"
            textBody="When Nike came calling, Matter Supply was able to create a highly responsive and dynamic campaign site on a tight timeline using Netlify."
            tabsCtaLinkTo="/"
            metric1="190k"
            metricCaption1="Dream submissions"
            metric2="200k"
            metricCaption2="Hits per day"
          />
        </MyTabPanel>
        <MyTabPanel>
          <TabPanelContent
            tabsVisual={<BeckhamImage />}
            textHeadline="Victoria Beckham Beauty launches highly performant eCommerce site"
            textBody="Integrating Netlify, Contentful and Shopify Plus, digital agency Fostr created an eCommerce stack for VBB optimized for frequent content updates, performance and SEO. Using Netlify meant they could move quickly and scale without worrying about infrastructure."
            tabsCtaLinkTo="/"
            metric1="190k"
            metricCaption1="Dream submissions"
            metric2="200k"
            metricCaption2="Hits per day"
            // metric1={<beckhamProofImage1 />}
            // metricCaption1=""
            // metric2={<beckhamProofImage2 />}
            // metricCaption2=""
          />
        </MyTabPanel>
        <MyTabPanel>
          <TabPanelContent
            tabsVisual={<CornerstoneImage />}
            textHeadline="Cornerstone OnDemand achieves 25% better performance, without added cost of third-party CDN"
            textBody="Talent management pro company CornerStone OnDemand increased the speed of development and delivery for its international site by migrating from a legacy technology stack to Netlify."
            tabsCtaLinkTo="/"
            metric1="25%"
            metricCaption1="Faster page loads"
            metric2="30%"
            metricCaption2="Fast time to market"
          />
        </MyTabPanel>
        <MyTabPanel>
          <TabPanelContent
            tabsVisual={<CitrixImage />}
            textHeadline="Citrix delivers better UX with less overhead"
            textBody="Citrix executed a massive migration of their product documentation to Netlify ahead of schedule, resulting in a 65% cost savings and a significantly better user experience."
            tabsCtaLinkTo="/"
            metric1="65%"
            metricCaption1="Cost savings"
            metric2="3.5M"
            metricCaption2="Users annually"
          />
        </MyTabPanel>
      </Tabs>
    </Container>
  </ProPancake>
)

ProProofTabs.propTypes = {}

ProProofTabs.defaultProps = {}

export default ProProofTabs
