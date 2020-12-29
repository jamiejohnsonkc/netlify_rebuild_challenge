/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Icon from "../../../base/Icon"
import NavLink from "../../navElements/NavLink"
import PropTypes from "prop-types"

//* THIS COMPONENT IS A REMNANT OF THE INITIAL MENU DEVELOPMENT. KEPT HERE AS STARTING POINT FOR FUTURE REFACTORING OF A RESUABLE, DYNAMICALLY GENERATED MENU.

const DynamicMenuWithElements = (props) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <ul
          // className="mainNavUl"
          sx={{
            listStyle: "none",

            cursor: "pointer",
            // variant: "layout.mainNavUl",
          }}
        >
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li
              // className="mainNavListItem"
              sx={{
                display: "block",
                position: "relative",

                ":hover": {
                  cursor: "pointer",
                },
                ":hover > ul, :focus-within > ul ": {
                  visibility: "visible",
                  opacity: "1",
                  display: "block",
                },
                // variant: "layout.mainNavListItem",
              }}
              key={link.name}
            >
              <NavLink href={link.link}>{link.name}</NavLink>
            </li>
          ))}
          <li
            sx={
              {
                // variant: "layout.mainMenuSpacer",
              }
            }
            className="spacer"
          ></li>
          <li
            className="search"
            sx={
              {
                // variant: "layout.mainNavSearch",
              }
            }
          >
            <NavLink
              sx={
                {
                  // variant: "links.mainMenuSearch",
                }
              }
            >
              <Icon
                iconName="Search"
                sx={{
                  color: "white",
                  width: "2em",
                  height: "1.5em",
                  verticalAlign: "sub",
                  ":hover": {
                    color: "accent",
                  },
                }}
              />
            </NavLink>
          </li>
          <li
            sx={
              {
                // variant: "layout.mainNavListItem",
              }
            }
          >
            <NavLink>Contact Sales</NavLink>
          </li>
          <li
            sx={
              {
                // variant: "layout.mainNavListItem",
              }
            }
          >
            <NavLink>Log In</NavLink>
          </li>
          <li
            className="divider"
            sx={{
              color: "white",

              // variant: "layout.mainMenuDivider",
            }}
          >
            <a>|</a>
          </li>
          <li
            sx={
              {
                // marginRight: 0,
                // height: "16px",
                // variant: "layout.mainNavListItem",
              }
            }
          >
            <NavLink>
              Sign Up
              <Icon
                iconName="ArrowRight"
                sx={{
                  color: "white",
                  width: "2em",
                  // height: "1.5em",
                  verticalAlign: "middle",
                  ":hover": {
                    color: "accent",
                  },
                }}
              />
            </NavLink>
          </li>
        </ul>
      )}
    />
  )
}

DynamicMenuWithElements.propTypes = {}

DynamicMenuWithElements.defaultProps = {}

export default DynamicMenuWithElements
