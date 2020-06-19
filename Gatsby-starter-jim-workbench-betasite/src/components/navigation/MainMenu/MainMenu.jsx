/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import Link from "../../base/Link"
import styled from "@emotion/styled"
import { IconContext } from "react-icons"
import Icon from "../../base/Icon"

//TODO fix logo box: what is forcing the extra space to the right?
//TODO something about the glyph arrow is disrupting the height and center axis alignment int he main header
//TODO delete the "NavBarLogo" component

const MainMenu = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
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
      render={(data) => (
        <ul
          {...props}
          className="mainMenu"
          sx={{
            display: "flex",
            width: "100%",
            listStyle: "none",

            variant: "layout.mainMenu",
          }}
        >
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li
              sx={{
                variant: "layout.mainMenuli",
                ":hover, :hover > ul, :focus-within > ul, :hover > ul + li": {
                  visibility: "visible",
                  opacity: "1",
                  display: "block",
                },
              }}
              key={link.name}
            >
              <Link
                sx={{
                  ":hover, :hover > ul, :focus-within > ul": {
                    visibility: "visible",
                    opacity: "1",
                    display: "block",
                  },
                }}
                to={link.link}
                aria-haspopup={
                  link.subMenu && link.subMenu.length > 0 ? true : false
                }
              >
                {link.name}
              </Link>

              {link.subMenu && link.subMenu.length > 0 ? (
                <ul
                  {...props}
                  className="subMenu"
                  sx={{
                    variant: "layout.mainSubMenu",
                    visibility: "hidden",
                    opacity: "0",
                    display: "none",
                    position: "absolute",
                    ":hover, :hover > li, :focus-within > li, :hover > li + a": {
                      visibility: "visible",
                      opacity: "1",
                      display: "block",
                      zIndex: 100,
                      top: "100%",
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
                        variant: "layout.mainSubMenuli",
                        ":hover, & li + a:hover ": {
                          visiblity: "visible",
                          display: "block",
                          opacity: "1",
                          backgroundColor: "red",
                          zIndex: "100",
                        },
                      }}
                      key={subLink.name}
                    >
                      <Link
                        sx={{
                          color: "white",
                          textDecoration: "none",
                          variant: "links.subMenu",
                        }}
                        to={subLink.link}
                      >
                        {subLink.name}
                      </Link>
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
          >
            <Link />
          </li>
          <li className="search">
            <Link
              sx={{
                variant: "layout.mainMenuSearch",
              }}
            >
              {/* //TODO remove iconContext provider hooks inside gatsby: unnecessary */}
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
            </Link>
          </li>
          <li
            sx={{
              variant: "layout.mainMenuContact",
            }}
          >
            <Link>Contact Sales</Link>
          </li>
          <li
            sx={{
              variant: "layout.mainMenuLogIn",
            }}
          >
            <Link>Log In</Link>
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
            <Link>Sign Up</Link>

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
}

export default MainMenu
