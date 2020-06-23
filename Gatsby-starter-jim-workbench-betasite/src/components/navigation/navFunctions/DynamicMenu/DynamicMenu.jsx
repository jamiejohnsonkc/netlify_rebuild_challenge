/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Logo from "../../../base/Logo"
import Icon from "../../../base/Icon"
import NavLink from "../../navElements/NavLink"
import NavSubLink from "../../NavElements/NavSubLink"
import PropTypes from "prop-types"

const DynamicMenu = (props) => {
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
                subMenu {
                  link
                  name
                  subSubMenu {
                    link
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <ul
          className="mainNavUl"
          sx={{
            listStyle: "none",

            cursor: "pointer",
            variant: "layout.mainNavUl",
          }}
        >
          <li>Test</li>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li
              className="mainNavListItem"
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
                variant: "layout.mainNavListItem",
              }}
              key={link.name}
            >
              <NavLink
                href={link.link}
                aria-haspopup={
                  link.subMenu && link.subMenu.length > 0 ? true : false
                }
              >
                {link.name}
              </NavLink>
              {link.subMenu && link.subMenu.length > 0 ? (
                <ul
                  className="mainNavSubMenu"
                  sx={{
                    visibility: "hidden",
                    opacity: "0",
                    display: "none",
                    position: "absolute",
                    left: "0",
                    ":hover": {
                      visibility: "visible",
                      opacity: "1",
                      display: "block",
                    },
                    variant: "layout.mainNavSubMenu",
                  }}
                  aria-label="submenu"
                >
                  {link.subMenu.map((subLink) => (
                    <li
                      className="mainNavSubListItem"
                      sx={{
                        clear: "both",
                        width: "100%",
                        ":hover": {},
                        ":hover > ul, :focus-within > ul ": {
                          visibility: "visible",
                          opacity: "1",
                          display: "block",
                        },
                        variant: "layout.mainNavSubListItem",
                      }}
                      key={subLink.name}
                    >
                      <NavSubLink sx={{}} href={subLink.link}>
                        {subLink.name}
                      </NavSubLink>
                      {subLink.subSubMenu && subLink.subSubMenu.length > 0 ? (
                        <ul
                          sx={{
                            visibility: "hidden",
                            opacity: "0",
                            display: "none",
                            position: "absolute",

                            ":hover": {
                              visibility: "visible",
                              opacity: "1",
                              display: "block",
                            },
                            variant: "layout.mainNavSubSubMenu",
                          }}
                          aria-label="submenu"
                          className="MainNavSubSubMenu"
                        >
                          {subLink.subSubMenu.map((subSubLink) => (
                            <li
                              sx={{
                                width: "100%",

                                ":hover": {
                                  cursor: "pointer",
                                },
                                ":hover > ul, :focus-within > ul ": {
                                  visibility: "visible",
                                  opacity: "1",
                                  display: "block",
                                },
                                variant: "layout.mainNavSubSubListItem",
                              }}
                              key={subSubLink.name}
                              className="MainNavSubSubListItem"
                            >
                              <NavSubLink
                                sx={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                href={subSubLink.link}
                              >
                                {subSubLink.name}
                              </NavSubLink>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li
            sx={{
              variant: "layout.mainMenuSpacer",
            }}
            className="spacer"
          ></li>
          <li
            className="search"
            sx={{
              variant: "layout.mainNavSearch",
            }}
          >
            <NavLink
              sx={{
                variant: "links.mainMenuSearch",
              }}
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
            sx={{
              variant: "layout.mainNavListItem",
            }}
          >
            <NavLink>Contact Sales</NavLink>
          </li>
          <li
            sx={{
              variant: "layout.mainNavListItem",
            }}
          >
            <NavLink>Log In</NavLink>
          </li>
          <li
            className="divider"
            sx={{
              color: "white",

              variant: "layout.mainMenuDivider",
            }}
          >
            <a>|</a>
          </li>
          <li
            sx={{
              // marginRight: 0,
              // height: "16px",
              variant: "layout.mainNavListItem",
            }}
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

DynamicMenu.propTypes = {}

DynamicMenu.defaultProps = {}

export default DynamicMenu
