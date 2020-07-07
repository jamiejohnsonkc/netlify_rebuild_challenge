/** @jsx jsx */
import { jsx, Grid, Box, Styled, Text } from "theme-ui"
import { Link } from "gatsby"
import Icon from "../../../base/Icon"
import React from "react"
import PropTypes from "prop-types"
import MegaNavLink from "../../../navigation/MegaNavLink"
// import Link from "../../navigation/MegaNavLink"

// const MegaNavLink = ({
//   bg,
//   colors,
//   padding,
//   text,
//   variant,
//   margin,
//   mt,
//   ...props
// }) => (
//   <Link
//     {...props}
//     activeClassName="active"
//     className="navLink"
//     sx={{
//       margin,
//       mt,
//       colors,
//       padding,
//       bg,
//       variant: "links.megaNavLink",
//     }}
//   />
// )

//TODO set hover color on left side of meganav
//TODO fix responsive sizing

const MegaNav = (props) => (
  <Box
    className="MegaNav"
    {...props}
    sx={{
      // width: ["80em"],
      display: "block",
      position: "absolute",
      left: "0",
      variant: "nav.megaNav",
    }}
  >
    <Grid gap={0} columns={[1, "30vw 24vw"]}>
      <Box
        p={4}
        {...props}
        sx={{
          borderRight: "solid .025em #e8e8e8",
        }}
      >
        <Styled.h4
          sx={{
            variant: "nav.MegaNavHeader",
          }}
        >
          The Netlify Platform
        </Styled.h4>
        <Text mb={4} variant="nav.megaNavText">
          <b>Instantly build and deploy</b> your sites to our global network
          from Git. Custom domains, https, deploy previews, rollbacks and much
          more.
        </Text>
        <MegaNavLink>
          Explore How It Works
          <Icon
            iconName="ArrowRight"
            sx={{
              verticalAlign: "middle",
            }}
          />
        </MegaNavLink>
      </Box>
      <Box>
        <div>
          <Grid gap={1} columns={[1, 2]}>
            <Box
              p={4}
              {...props}
              sx={{
                borderRight: "solid .025em #e8e8e8",
              }}
            >
              <Styled.h4
                sx={{
                  variant: "nav.MegaNavHeader",
                }}
              >
                Features
              </Styled.h4>
              <MegaNavLink>Build & Test</MegaNavLink>
              <MegaNavLink>Deploy & Host</MegaNavLink>
              <MegaNavLink>Serverless Functions</MegaNavLink>
              <MegaNavLink>Analytics</MegaNavLink>
              <MegaNavLink>Instant Forms</MegaNavLink>
              <MegaNavLink>Split Testing</MegaNavLink>
              <MegaNavLink>Large Media</MegaNavLink>
              <MegaNavLink>Identity</MegaNavLink>
            </Box>
            <Box p={4}>
              <Styled.h4
                sx={{
                  variant: "nav.MegaNavHeader",
                }}
              >
                Technologies
              </Styled.h4>
              <MegaNavLink>Jamstack</MegaNavLink>
              <MegaNavLink>Vue.js</MegaNavLink>
              <MegaNavLink>Gatsby</MegaNavLink>
              <MegaNavLink>Angular</MegaNavLink>
              <MegaNavLink>Next.js</MegaNavLink>
              <MegaNavLink>Sitecore</MegaNavLink>
              <MegaNavLink>Drupal</MegaNavLink>
              <MegaNavLink>Wordpress</MegaNavLink>
            </Box>
          </Grid>
        </div>
      </Box>
    </Grid>
  </Box>
)

MegaNav.propTypes = {}

MegaNav.defaultProps = {}

export default MegaNav
