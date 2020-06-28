/** @jsx jsx */
import { jsx, Styled, Box, Grid, styles, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import "./react-tabs.css"
import Button from "../../base/Button"
import Logo1 from "../../../svg/assets/logo-1.svg"
import Logo2 from "../../../svg/assets/logo-2.svg"
import Logo3 from "../../../svg/assets/logo-3.svg"
import Logo4 from "../../../svg/assets/logo-4.svg"
import Logo5 from "../../../svg/assets/logo-5.svg"
import CtaLink from "../../base/CtaLink"

const CustomTab = (props) => (
  <Tab
    {...props}
    sx={{
      display: "inline-block",
      // border: "1px solid transparent",
      borderBottom: "none",
      bottom: "-1px",
      position: "relative",
      listStyle: "none",
      // padding: "6px 12px",
      cursor: "pointer",
    }}
  >
    <Button
      variant="pill.grayMark"
      {...props}
      sx={{ width: "100%", padding: 0 }}
      //   {...props}
      //   sx={{
      //     "& svg > .st0": {
      //       fill: "gray6",
      //     },
      //   }}
    >
      {props.children}
    </Button>
  </Tab>
)

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

// const TabPanelGridItem = ({...props})=> (
//   <Box {...props} sx={{
//   display: :gri
//   }}
// )

CustomTab.tabsRole = "Tab" // Required field to use your custom Tab

const TabsBlock = (props) => (
  <Tabs
    {...props}
    sx={{
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: `auto auto`,
      position: "relative",
      minHeight: "26.1em",
    }}
  >
    <TabList //ul
      {...props}
      sx={{
        // margin: " 0 10px",
        pt: 2,
        pb: 4,
        px: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gap: "2",
      }}
    >
      <CustomTab>
        <Logo1
          {...props}
          sx={{
            maxWidth: "6em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo2
          {...props}
          sx={{
            maxWidth: "6em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo3
          {...props}
          sx={{
            maxWidth: "6em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo4
          {...props}
          sx={{
            maxWidth: "4em",
          }}
        />
      </CustomTab>
      <CustomTab>
        <Logo5
          {...props}
          sx={{
            maxWidth: "5.75em",
          }}
        />
      </CustomTab>
    </TabList>
    <TabPanel>
      <TabPanelContent
        {...props}
        sx={{
          paddingBottom: 4,
        }}
      >
        <Box
          {...props}
          sx={{
            justifyContent: "center",
            alignContent: "start",
            display: "grid",
          }}
        >
          <Box
            {...props}
            sx={{
              height: "8em",
              width: "12em",
              bg: "lightgray",
              borderRadius: 6,
              overflow: "visibile",
            }}
          ></Box>
        </Box>
        <Box
          {...props}
          sx={{
            display: "grid",
          }}
        >
          <Box>
            <Styled.h3
              {...props}
              sx={{
                marginBottom: 4,
              }}
            >
              Sit occaecat fugiat elit non amet id eu consequat
            </Styled.h3>
            <Styled.p
              {...props}
              sx={{
                marginBottom: 4,
              }}
            >
              Laboris do sit nostrud pariatur cillum fugiat ullamco consequat
              veniam aliquip commodo incididunt eu ad. Ipsum deserunt
              reprehenderit Lorem tempor consectetur dolor amet id commodo ipsum
              ullamco officia consectetur. Enim adipisicing adipisicing
              consectetur elit veniam magna duis nulla velit cillum ipsum.
              Occaecat pariatur laborum deserunt
            </Styled.p>
            <CtaLink
              linkText="Read the case study"
              iconName="ArrowRight"
              iconSize="1em"
              color="inherit"
              sx={{
                variant: "links.ctaLink.arrowRight",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            />
          </Box>
        </Box>
        <Box
          {...props}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "start",
          }}
        >
          <Text
            {...props}
            sx={{
              variant: "styles.b1",
              color: "highlight",
              marginBottom: 1,
            }}
          >
            75%
          </Text>
          <Text
            {...props}
            sx={{
              fontSize: 0,
              variant: "text.capsBold",
              textAlign: "center",
            }}
          >
            cost savings
          </Text>
        </Box>
        <Box
          {...props}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "start",
          }}
        >
          <Text
            {...props}
            sx={{
              variant: "styles.b1",
              color: "highlight",
              marginBottom: 1,
            }}
          >
            3.5M
          </Text>
          <Text
            {...props}
            sx={{
              fontSize: 0,
              variant: "text.capsBold",
              textAlign: "center",
            }}
          >
            users annually
          </Text>
        </Box>
      </TabPanelContent>
    </TabPanel>
    <TabPanel>Panel 2</TabPanel>
  </Tabs>
)

TabsBlock.propTypes = {}

TabsBlock.defaultProps = {}

export default TabsBlock
