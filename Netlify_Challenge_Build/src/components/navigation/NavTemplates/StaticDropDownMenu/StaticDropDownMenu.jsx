/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Icon from "../../../base/Icon"
import NavLink from "../../navElements/NavLink"
import NavSubLink from "../../navElements/NavSubLink"
import PropTypes from "prop-types"

const StaticDropDownMenu = (props) => (
  <ul
    // className="navMenu"
    sx={{
      listStyle: "none",

      cursor: "pointer",
      // variant: "nav.navMenu",
    }}
  >
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
    >
      <NavLink
        href={link.link}
        aria-haspopup={link.subMenu && link.subMenu.length > 0 ? true : false}
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
              </ul>
            ) : null}
          </li>
        </ul>
      ) : null}
    </li>
  </ul>
)

StaticDropDownMenu.propTypes = {}

StaticDropDownMenu.defaultProps = {}

export default StaticDropDownMenu
