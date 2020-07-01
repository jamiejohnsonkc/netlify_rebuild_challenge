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
import Button from "../../base/Button"
import Logo1 from "../../../svg/assets/logo-1.svg"
import Logo2 from "../../../svg/assets/logo-2.svg"
import Logo3 from "../../../svg/assets/logo-3.svg"
import Logo4 from "../../../svg/assets/logo-4.svg"
import Logo5 from "../../../svg/assets/logo-5.svg"
import CtaLink from "../../base/CtaLink"
import styled from "@emotion/styled"
import { color } from "../../../../../jim-workbench-custom-themes/colors"
import { lighten } from "@theme-ui/color"
import PropTypes from "prop-types"
import Pancake from "../../layout/Pancake"

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
    }}
  />
)

const tablistStyle = (props) => (
  <div
    {...props}
    sx={{
      className: "tablistStyle",
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
    }}
  ></div>
)

const ProofTabs = (props) => (
  <Pancake
    className="pancake"
    {...props}
    sx={{
      variant: "layout.section",
    }}
  >
    {/* <ColorModeCycler />
      <ColorModeToggle /> */}
    <Container
      className="container"
      {...props}
      sx={{
        boxShadow: "test5",
        py: 4,
      }}
    >
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
              fill: "highlight",
            },
          },
        }}
      >
        <TabList className="tablistStyle">
          <Tab>
            <Box {...props} sx={{}}>
              <TabButton>
                <Logo1
                  {...props}
                  sx={{
                    maxWidth: "6em",
                  }}
                />
              </TabButton>
            </Box>
          </Tab>
          <Tab>
            <Box {...props} sx={{}}>
              <TabButton>
                <Logo2
                  {...props}
                  sx={{
                    maxWidth: "6em",
                  }}
                />
              </TabButton>
            </Box>
          </Tab>
          <Tab>
            <Box {...props} sx={{}}>
              <TabButton>
                <Logo3
                  {...props}
                  sx={{
                    maxWidth: "6em",
                  }}
                />
              </TabButton>
            </Box>
          </Tab>
          <Tab>
            <Box {...props} sx={{}}>
              <TabButton>
                <Logo4
                  {...props}
                  sx={{
                    maxWidth: "4em",
                  }}
                />
              </TabButton>
            </Box>
          </Tab>
          <Tab>
            <Box {...props} sx={{}}>
              <TabButton>
                <Logo5
                  {...props}
                  sx={{
                    maxWidth: "5.75em",
                  }}
                />
              </TabButton>
            </Box>
          </Tab>
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
                    marginBottom: 2,
                    maxWidth: "83%",
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
                    marginBottom: 2,
                    maxWidth: "83%",
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
                    marginBottom: 2,
                    maxWidth: "83%",
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
                    marginBottom: 2,
                    maxWidth: "83%",
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
                    marginBottom: 2,
                    maxWidth: "83%",
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
