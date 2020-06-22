/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Logo from "../../base/Logo"
import Icon from "../../base/Icon"
import MainNavLink from "../../navigation/MainNavLink"
import MainNavSubLink from "../../navigation/MainNavSubLink"
import PropTypes from "prop-types"

//TODO fix logo box: what is forcing the extra space to the right?
//TODO something about the glyph arrow is disrupting the height and center axis alignment int he main header
//TODO delete the "NavBarLogo" component
//TODO content breaking parent when downsizing
//TODO remove iconContext provider hooks inside gatsby: unnecessary

const MainMenu = (props) => {
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
              <MainNavLink
                href={link.link}
                aria-haspopup={
                  link.subMenu && link.subMenu.length > 0 ? true : false
                }
              >
                {link.name}
              </MainNavLink>
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
                      <MainNavSubLink sx={{}} href={subLink.link}>
                        {subLink.name}
                      </MainNavSubLink>
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
                              <MainNavSubLink
                                sx={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                href={subSubLink.link}
                              >
                                {subSubLink.name}
                              </MainNavSubLink>
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
            <MainNavLink
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
            </MainNavLink>
          </li>
          <li
            sx={{
              variant: "layout.mainNavListItem",
            }}
          >
            <MainNavLink>Contact Sales</MainNavLink>
          </li>
          <li
            sx={{
              variant: "layout.mainNavListItem",
            }}
          >
            <MainNavLink>Log In</MainNavLink>
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
            <MainNavLink>
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
            </MainNavLink>
          </li>
        </ul>
      )}
    />
  )
}

MainMenu.propTypes = {}

MainMenu.defaultProps = {}

export default MainMenu
