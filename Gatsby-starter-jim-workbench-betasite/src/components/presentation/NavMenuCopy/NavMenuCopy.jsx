/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const NavMenu = (props) => {
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
          <Logo
            className="mastHeadLogo"
            sx={{
              variant: "layout.mastheadLogo",
            }}
          />
          <ul
            className="mainNavUl"
            sx={{
              listStyle: "none",

              margin: 0,
              padding: 0,
            }}
          >
            {data.site.siteMetadata.menuLinks.map((link) => (
              <li
                sx={{
                  color: "white",
                  backgroundColor: "darkorange",
                  display: "block",
                  float: "left",
                  padding: "1rem",
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
                }}
                key={link.name}
              >
                <a
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  href={link.link}
                  aria-haspopup={
                    link.subMenu && link.subMenu.length > 0 ? true : false
                  }
                >
                  {link.name}
                </a>
                {link.subMenu && link.subMenu.length > 0 ? (
                  <ul
                    sx={{
                      listStyle: "none",
                      m: 0,
                      p: 0,
                      backgroundColor: "darkorange",
                      visibility: "hidden",
                      opacity: "0",
                      display: "none",
                      minWidth: "8rem",
                      position: "absolute",
                      transition: "all 0.5s ease",
                      marginTop: "1rem",
                      left: "0",
                      ":hover": {
                        visibility: "visible",
                        opacity: "1",
                        display: "block",
                      },
                    }}
                    aria-label="submenu"
                  >
                    {link.subMenu.map((subLink) => (
                      <li
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
                        }}
                        key={subLink.name}
                      >
                        <a
                          sx={{
                            color: "white",
                            textDecoration: "none",
                          }}
                          href={subLink.link}
                        >
                          {subLink.name}
                        </a>
                        {subLink.subSubMenu && subLink.subSubMenu.length > 0 ? (
                          <ul
                            sx={{
                              listStyle: "none",
                              p: 0,
                              m: 0,
                              backgroundColor: "darkorange",
                              visibility: "hidden",
                              opacity: "0",
                              display: "none",
                              minWidth: "8rem",
                              position: "absolute",
                              transition: "all 0.5s ease",
                              marginTop: "1rem",
                              left: "0",
                              ":hover": {
                                visibility: "visible",
                                opacity: "1",
                                display: "block",
                              },
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
                                    backgroundColor: "red",
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
                                  {/* {subLink.name} */}
                                  subsublink
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
          </ul>
        </>
      )}
    />
  )
}

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
