/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql, Link } from "gatsby"
import MainNavLink from "../../navigation/MainNavLink"
import MainNavSubLink from "../../navigation/MainNavSubLink"
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
                sx={{}}
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
                        },
                        variant: "layout.mainNavSubLink",
                      }}
                      key={subLink.name}
                    >
                      <MainNavSubLink
                        sx={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        href={subLink.link}
                      >
                        {subLink.name}
                      </MainNavSubLink>
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
            <MainNavLink />
          </li>
          <li
            className="search"
            sx={{
              variant: "layout.mainMenuSearch",
            }}
          >
            <Link
              sx={{
                variant: "links.mainMenuSearch",
              }}
            >
              <Icon
                iconName="Search"
                {...props}
                sx={{
                  variant: "layout.mainMenuSearchIcon",
                }}
              />
            </Link>
          </li>
          <li
            sx={{
              variant: "layout.mainMenuContact",
            }}
          >
            <MainNavLink>Contact Sales</MainNavLink>
          </li>
          <li
            sx={{
              variant: "layout.mainMenuLogIn",
            }}
          >
            <MainNavLink>Log In</MainNavLink>
          </li>

          <li
            className="divider"
            sx={{
              variant: "layout.mainMenuDivider",
            }}
          >
            |
          </li>

          <li
            sx={{
              variant: "layout.mainMenuSignUp",
            }}
          >
            <MainNavLink>
              Sign Up
              <Icon
                iconName="ArrowRight"
                sx={{
                  variant: "layout.mainNavArrow",
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

{
  /* //TODO remove iconContext provider hooks inside gatsby: unnecessary */
}
