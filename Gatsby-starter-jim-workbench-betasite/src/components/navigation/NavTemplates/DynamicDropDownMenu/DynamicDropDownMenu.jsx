/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Icon from "../../../base/Icon"
import NavLink from "../../navElements/NavLink"
import NavSubLink from "../../navElements/NavSubLink"
import PropTypes from "prop-types"

//! THIS COMPONENT IS TO BE REFACTORED FOR REUSE AND IS NOT AN ACTIVE ELEMENT IN THIS PROJECT.  iT PROVIDES BASIC MENU, ITEM, LINK, SUBMENU, ETC. FUNCTIONALITY

//TODO something about the glyph arrow is disrupting the height and center axis alignment int he main header

const DynamicDropDownMenu = (props) => {
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
          // className="navMenu"
          sx={{
            listStyle: "none",

            cursor: "pointer",
            // variant: "nav.navMenu",
          }}
        >
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li
              // className="navItem"
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
                // variant: "nav.navItem",
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
                  // className="subMenu"
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
                    // variant: "nav.subMenu",
                  }}
                  aria-label="submenu"
                >
                  {link.subMenu.map((subLink) => (
                    <li
                      // className="subMenuNavItem"
                      sx={{
                        clear: "both",
                        width: "100%",
                        ":hover": {},
                        ":hover > ul, :focus-within > ul ": {
                          visibility: "visible",
                          opacity: "1",
                          display: "block",
                        },
                        // variant: "nav.subMenuNavItem",
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
                            // variant: "nav.subSubMenu",
                          }}
                          aria-label="submenu"
                          // className="subSubMenu"
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
                                // variant: "nav.subSubMenuNavItem",
                              }}
                              key={subSubLink.name}
                              // className="subSubMenuNavItem"
                            >
                              <NavSubLink
                                sx={{
                                  color: "white",
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
        </ul>
      )}
    />
  )
}

DynamicDropDownMenu.propTypes = {}

DynamicDropDownMenu.defaultProps = {}

export default DynamicDropDownMenu
