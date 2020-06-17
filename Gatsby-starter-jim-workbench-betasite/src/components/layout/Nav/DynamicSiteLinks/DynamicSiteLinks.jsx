/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

const DynamicSiteLinks = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              subMenu {
                link
                name
              }
            }
          }
        }
      }
    `}
    render={(data, menuLinks) => (
      <ul
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: ["column", "column", "row"],
        }}
      >
        {
          (menuLinks = data.site.siteMetadata.menuLinks.map((link) => (
            <li
              key={link.name}
              sx={{
                display: ["inline-block"],
                my: [4, 4, 2],
                mx: [null, null, 2],
                zIndex: [6, 6, 1],
                listStyleType: "none",
                padding: 1,
              }}
            >
              <Link
                {...props}
                activeClassName="active"
                sx={{
                  whiteSpace: "nowrap",
                  position: "relative",
                  cursor: "pointer",
                  variant: "links.nav",
                }}
                to={link.link}
              >
                {link.name}
              </Link>
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
                  {
                    (subMenu = data.site.siteMetadata.link.subMenu.map(
                      (subLink) => (
                        <li
                          sx={{
                            clear: "both",
                            width: "100%",
                            padding: "1rem",
                            ":hover": {
                              backgroundColor: "red",
                            },
                          }}
                          key={subLink.name}
                        >
                          <Link
                            sx={{
                              color: "white",
                              textDecoration: "none",
                            }}
                            href={subLink.link}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      )
                    ))
                  }
                </ul>
              ) : null}
            </li>
          )))
        }
      </ul>
    )}
  />
)

DynamicSiteLinks.propTypes = {}

DynamicSiteLinks.defaultProps = {}

export default DynamicSiteLinks
