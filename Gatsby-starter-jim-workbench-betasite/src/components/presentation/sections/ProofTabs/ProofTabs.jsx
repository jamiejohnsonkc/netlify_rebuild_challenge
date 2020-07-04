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

const TabPanelContent = ({
  height,
  width,
  bg,
  color,
  padding,
  margin,
  data,
  ...props
}) => (
  <Grid
    {...props}
    // columns={(5, "1fr 2fr 1fr 1fr")}
    sx={{
      height,
      width,
      bg,
      color,
      margin,
      gridTemplateColumns: [(1, "1fr"), (2, "1fr 1fr"), (5, "1fr 2fr 1fr 1fr")],
      gap: [2, 2, 2, 2],
      paddingBottom: [0, 4, 4, 4],
      justifyContent: ["center"],
    }}
  />
)

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
        "&.MyTabActive": {
          backgroundColor: "transparent",
          // backgroundColor: "pink",
          border: "none",
          outline: "none",
        },
        "&.MyTabFocused": {
          backgroundColor: "transparent",
          // backgroundColor: "pink",
          border: "none",
          outline: "none",
        },
        "&:focus": {
          border: "none !important",
          outline: "none !important",
        },
        "& > button": {
          background: lighten("highlight", 0.52),
          border: "none",
        },
        "& > button > svg": {
          alignSelf: "center",
          flex: 1,
        },
        "& > button > svg > .logoIpsum": {
          fill: "highlight",
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
          <TabPanelContent {...props}>
            <Box
              {...props}
              sx={{
                alignContent: "start",
                display: "grid",
              }}
            >
              <ImageWrapper>
                <ProofTabsCafe />
              </ImageWrapper>
            </Box>
            <Box
              {...props}
              sx={{
                display: "grid",
              }}
            >
              <Box px={2}>
                <Styled.h3
                  {...props}
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Sit occaecat fugiat lorem tempor consectetur dolor amet
                </Styled.h3>
                <Styled.p
                  {...props}
                  sx={{
                    marginBottom: 4,
                    maxWidth: "94%",
                  }}
                >
                  Laboris do sit nostrud pariatur cillum fugiat ullamco
                  consequat veniam aliquip commodo incididunt eu ad. Ipsum
                  deserunt reprehenderit Lorem tempor consectetur dolor amet id
                  commodo ipsum ullamco officia consectetur. Enim adipisicing
                  adipisicing consectetur elit veniam magna duis nulla velit
                  cillum ipsum. Occaecat pariatur laborum deserunt
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
                  variant: "styles.b2",
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
                  variant: "styles.b2",
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
                alignContent: "start",
                display: "grid",
              }}
            >
              <ImageWrapper>
                <ProofTabsSparks />
              </ImageWrapper>
            </Box>
            <Box
              {...props}
              sx={{
                display: "grid",
              }}
            >
              <Box px={2}>
                <Styled.h3
                  {...props}
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Sit occaecat fugiat lorem tempor consectetur dolor amet
                </Styled.h3>
                <Styled.p
                  {...props}
                  sx={{
                    marginBottom: 4,
                    maxWidth: "94%",
                  }}
                >
                  Laboris do sit nostrud pariatur cillum fugiat ullamco
                  consequat veniam aliquip commodo incididunt eu ad. Ipsum
                  deserunt reprehenderit Lorem tempor consectetur dolor amet id
                  commodo ipsum ullamco officia consectetur. Enim adipisicing
                  adipisicing consectetur elit veniam magna duis nulla velit
                  cillum ipsum. Occaecat pariatur laborum deserunt
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
                  variant: "styles.b2",
                  color: "highlight",
                  marginBottom: 1,
                }}
              >
                12%
              </Text>
              <Text
                {...props}
                sx={{
                  fontSize: 0,
                  variant: "text.capsBold",
                  textAlign: "center",
                }}
              >
                annual growth
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
                  variant: "styles.b2",
                  color: "highlight",
                  marginBottom: 1,
                }}
              >
                89%
              </Text>
              <Text
                {...props}
                sx={{
                  fontSize: 0,
                  variant: "text.capsBold",
                  textAlign: "center",
                }}
              >
                uptime increase
              </Text>
            </Box>
          </TabPanelContent>
        </TabPanel>
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
                alignContent: "start",
                display: "grid",
              }}
            >
              <ImageWrapper>
                <ProofTabsWoodworking />
              </ImageWrapper>
            </Box>
            <Box
              {...props}
              sx={{
                display: "grid",
              }}
            >
              <Box px={2}>
                <Styled.h3
                  {...props}
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Sit occaecat fugiat lorem tempor consectetur dolor amet
                </Styled.h3>
                <Styled.p
                  {...props}
                  sx={{
                    marginBottom: 4,
                    maxWidth: "94%",
                  }}
                >
                  Laboris do sit nostrud pariatur cillum fugiat ullamco
                  consequat veniam aliquip commodo incididunt eu ad. Ipsum
                  deserunt reprehenderit Lorem tempor consectetur dolor amet id
                  commodo ipsum ullamco officia consectetur. Enim adipisicing
                  adipisicing consectetur elit veniam magna duis nulla velit
                  cillum ipsum. Occaecat pariatur laborum deserunt
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
                  variant: "styles.b2",
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
                  variant: "styles.b2",
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
                alignContent: "start",
                display: "grid",
              }}
            >
              <ImageWrapper>
                <ProofTabsCombine />
              </ImageWrapper>
            </Box>
            <Box
              {...props}
              sx={{
                display: "grid",
              }}
            >
              <Box px={2}>
                <Styled.h3
                  {...props}
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Sit occaecat fugiat lorem tempor consectetur dolor amet
                </Styled.h3>
                <Styled.p
                  {...props}
                  sx={{
                    marginBottom: 4,
                    maxWidth: "94%",
                  }}
                >
                  Laboris do sit nostrud pariatur cillum fugiat ullamco
                  consequat veniam aliquip commodo incididunt eu ad. Ipsum
                  deserunt reprehenderit Lorem tempor consectetur dolor amet id
                  commodo ipsum ullamco officia consectetur. Enim adipisicing
                  adipisicing consectetur elit veniam magna duis nulla velit
                  cillum ipsum. Occaecat pariatur laborum deserunt
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
                  variant: "styles.b2",
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
                  variant: "styles.b2",
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
                alignContent: "start",
                display: "grid",
              }}
            >
              <ImageWrapper>
                <ProofTabsPlanning />
              </ImageWrapper>
            </Box>
            <Box
              {...props}
              sx={{
                display: "grid",
              }}
            >
              <Box px={2}>
                <Styled.h3
                  {...props}
                  sx={{
                    marginBottom: 2,
                  }}
                >
                  Sit occaecat fugiat lorem tempor consectetur dolor amet
                </Styled.h3>
                <Styled.p
                  {...props}
                  sx={{
                    marginBottom: 4,
                    maxWidth: "94%",
                  }}
                >
                  Laboris do sit nostrud pariatur cillum fugiat ullamco
                  consequat veniam aliquip commodo incididunt eu ad. Ipsum
                  deserunt reprehenderit Lorem tempor consectetur dolor amet id
                  commodo ipsum ullamco officia consectetur. Enim adipisicing
                  adipisicing consectetur elit veniam magna duis nulla velit
                  cillum ipsum. Occaecat pariatur laborum deserunt
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
                  variant: "styles.b2",
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
                  variant: "styles.b2",
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
      </Tabs>
    </Container>
  </Pancake>
)

ProofTabs.propTypes = {}

ProofTabs.defaultProps = {}

export default ProofTabs
