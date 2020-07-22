/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
// import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import NavLink from "../../../navigation/navElements/NavLink"
import NavMenu from "../../../navigation/navElements/NavMenu"
import SubMenu from "../../../navigation/navElements/SubMenu"
import NavItem from "../../../navigation/navElements/NavItem"
import { Link } from "gatsby"

import SubMenuNavItem from "../../../navigation/navElements/SubMenuNavItem"
import SearchButton from "../../../base/SearchButton"
import palette from "@palette"
import NavLinkIcon from "../../../navigation/navElements/NavLinkIcon"
import SubSubMenu from "../../../navigation/navElements/SubSubMenu"

//TODO fix static menu, dropdown and dropup: elements from linkmapping are breaking the build

//* This is the production component for nav menu.  It defines the menus, items, links, submenus, etc. Due to this menu's complexity this element is not derived from a reusable component.

export const SuperLink = (props) => (
  <Link
    {...props}
    // className="navLink"
    sx={{
      variant: "links.nav",
      fontWeight: 400,
      color: `${palette.gray3}`,
    }}
  >
    {props.children}
  </Link>
)

const SuperSubNavItem = (props) => (
  <SubMenuNavItem
    {...props}
    sx={{
      variant: "nav.subMenuNavItem",
    }}
  />
)

export const SuperSubLink = (props) => (
  <Link
    {...props}
    to={props.to}
    sx={{
      variant: "links.navSubLink",
      minWidth: "unset",
      fontSize: 0,
    }}
  />
)

const ProSuperUpMenu = (props) => (
  <>
    <NavMenu
      {...props}
      sx={{
        variant: "nav.navMenu",
        bg: `${palette.blackAlpha1}`,
        borderRadius: 6,
        px: [0, 0, 6, 6],
        py: [0, 0, 2, 2],
      }}
    >
      <NavItem>
        <SuperLink>
          Jamstack
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            <SuperSubNavItem>
              <SuperSubLink to="/">What is Jamstack?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Who is using Jamstack?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Jamstack for ecommerce</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Jamstack book</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Jamstack radio</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Jamstack conference</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Jamstack community</SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>
      <NavItem>
        <SuperLink>
          Deployment
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            <SuperSubNavItem>
              <SuperSubLink to="/">
                How to deploy Vue.js applications to the web
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                How to prerender content for the web
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Deploying a single page application
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">What is a CDN?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Structured Redirects and Headers
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                What is an edge service provider?
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">A/B testing on Static Sites</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Split testing for private features
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Deploy websites from Git</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Continuous Deployment</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Deploy tools: deployed branches
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Deploy tools: locked deploys</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Deploy tools: drag n drop/manual deploys
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Custom domains</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Wordpress Migration</SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>
      <NavItem>
        <SuperLink>
          Serverless
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            <SuperSubNavItem>
              <SuperSubLink to="/">What is a serverless website?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">What are serverless functions?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Serverless Functions and Lambda
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Netlify Functions</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">What are microservices?</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Identity APIs</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Ecommerce APIs</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Express.js with Serverless Functions
              </SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>
      <NavItem>
        <SuperLink>
          Development
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            {" "}
            <SuperSubNavItem>
              <SuperSubLink to="/">Versioning and Rollbacks</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Continuous integration and deployment
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Build tools</SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>{" "}
      <NavItem>
        <SuperLink>
          Markup and Static Site Generators
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            <SuperSubNavItem>
              <SuperSubLink to="/">
                What are static site generators?
              </SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Deploying a static site</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">
                Compare best static site generators
              </SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>{" "}
      <NavItem>
        <SuperLink>
          Performance
          <NavLinkIcon iconName="ChevronDown" />
        </SuperLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.superMenu",
            right: 0,
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.superMenuBox",
            }}
          >
            <SuperSubNavItem>
              <SuperSubLink to="/">Post processing</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Minification</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Caching</SuperSubLink>
            </SuperSubNavItem>
            <SuperSubNavItem>
              <SuperSubLink to="/">Images and performance</SuperSubLink>
            </SuperSubNavItem>
          </Box>
        </SubMenu>
      </NavItem>
    </NavMenu>
  </>
)

ProSuperUpMenu.propTypes = {}

ProSuperUpMenu.defaultProps = {}

export default ProSuperUpMenu
