/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Logo from "../../base/Logo"
import Icon from "../../base/Icon"
import MainNavLink from "../../navigation/MainNavLink"
import MainNavSubLink from "../../navigation/MainNavSubLink"
import PropTypes from "prop-types"

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
        <>
          {/* <Logo
            className="mastHeadLogo"
            sx={{
              variant: "layout.mastheadLogo",
            }}
          /> */}
          <ul
            className="mainNavUl"
            sx={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              cursor: "pointer",
              variant: "layout.mainNavUl",
            }}
          >
            {data.site.siteMetadata.menuLinks.map((link) => (
              <li
                className="mainNavListItem"
                sx={{
                  display: "block",
                  float: "left",
                  position: "relative",
                  transitionDuration: "0.5s",
                  ":hover": {
                    backgroundColor: "red",
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
                        className="mainNavSubLink"
                        sx={{
                          clear: "both",
                          width: "100%",
                          padding: "1rem",
                          ":hover": {
                            backgroundColor: "red",
                            cursor: "pointer",
                          },
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
                          >
                            {subLink.subSubMenu.map((subSubLink) => (
                              <li
                                sx={{
                                  clear: "both",
                                  width: "100%",
                                  padding: "1rem",
                                  ":hover": {
                                    cursor: "pointer",
                                  },
                                  ":hover > ul, :focus-within > ul ": {
                                    visibility: "visible",
                                    opacity: "1",
                                    display: "block",
                                  },
                                }}
                                key={subSubLink.name}
                              >
                                <a
                                  sx={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                  href={subSubLink.link}
                                >
                                  {subSubLink.name}
                                </a>
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
            <li className="search">
              <a
                sx={{
                  variant: "layout.mainMenuSearch",
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
              </a>
            </li>
            <li
              sx={{
                variant: "layout.mainMenuContact",
              }}
            >
              <a>Contact Sales</a>
            </li>
            <li
              sx={{
                variant: "layout.mainMenuLogIn",
              }}
            >
              <a>Log In</a>
            </li>
            <li
              className="divider"
              sx={{
                maxWidth: "10px",
                color: "white",
                variant: "layout.mainMenuDivider",
              }}
            >
              |
            </li>
            <li
              sx={{
                marginRight: 0,
                height: "16px",
                variant: "layout.mainMenu.SignUp",
              }}
            >
              <a>Sign Up</a>

              <Icon
                iconName="ArrowRight"
                sx={{
                  verticalAlign: "sub",
                  color: "white",
                  lineHeight: 1,
                  height: "14px",
                }}
              />
            </li>
          </ul>
        </>
      )}
    />
  )
}

MainMenu.propTypes = {}

MainMenu.defaultProps = {}

export default MainMenu
