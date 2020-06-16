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
