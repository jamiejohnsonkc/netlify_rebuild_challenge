/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../../../base/Logo"
import { IconContext } from "react-icons"
import Icon from "../../../base/Icon"

const StyledLink = ({ ...props }) => (
  <Link
    {...props}
    sx={{
      variant: "links.nav",
    }}
  />
)

const DynamicSiteLinks = ({ props }) => (
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
    render={(data, menuLinks, props) => (
      <ul
        className="mainLinks"
        {...props}
        sx={{
          display: "flex",
          width: "100%",
          lineHeight: 1,
          flexDirection: ["column", "column", "row"],
          listStyle: "none",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <li>
          <StyledLink activeClassName="active" href="/">
            <Logo {...props} />
          </StyledLink>
        </li>
        {
          (menuLinks = data.site.siteMetadata.menuLinks.map((link) => (
            <li key={link.name}>
              <StyledLink to={link.link}>{link.name}</StyledLink>
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
                        },
                      }}
                      key={subLink.name}
                    >
                      <StyledLink
                        sx={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        to={subLink.link}
                      >
                        {subLink.name}
                      </StyledLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          )))
        }
        <li
          className="spacer"
          sx={{
            flexBasis: [null, "6em", "10em"],
          }}
        >
          <StyledLink></StyledLink>
        </li>
        <li className="search">
          <StyledLink>
            <IconContext.Provider
              value={{
                style: {
                  width: "2em",
                  height: "1.5em",
                  verticalAlign: "sub",
                  color: "white",
                },
              }}
            >
              <Icon iconName="Search" />
            </IconContext.Provider>
          </StyledLink>
        </li>
        <li>
          <StyledLink>Contact Sales</StyledLink>
        </li>
        <li>
          <StyledLink>Log In</StyledLink>
        </li>
        <li
          className="divider"
          sx={{
            maxWidth: "10px",
            color: "white",
          }}
        >
          |
        </li>
        <li
          sx={{
            marginRight: 0,
          }}
        >
          <StyledLink>Sign Up</StyledLink>

          <IconContext.Provider
            value={{
              style: {
                // width: "1.25em",
                // height: "1.25em",
                verticalAlign: "sub",
                // marginLeft: ".5em",
                color: "white",
                lineHeight: 1,
                height: "14px",
              },
            }}
          >
            <Icon iconName="ArrowRight" />
          </IconContext.Provider>
        </li>
      </ul>
    )}
  />
)

DynamicSiteLinks.propTypes = {}

DynamicSiteLinks.defaultProps = {}

export default DynamicSiteLinks
