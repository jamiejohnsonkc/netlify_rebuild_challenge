/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import NavMenu from "../../navigation/navElements/NavMenu"
import SubMenuNavItem from "../../navigation/navElements/SubMenuNavItem"
import NavSubLink from "../../navigation/navElements/NavSubLink"
import NavItem from "../../navigation/navElements/NavItem"
import NavLink from "../../navigation/navElements/NavLink"
import SubMenu from "../../navigation/navElements/SubMenu"
import palette from "@palette"
// const DropDownNav = (props) => (
//   <NavMenu
//     {...props}
//     sx={{
//       backgroundColor: "pink",
//     }}
//   />
// )

const DropdownMenu = (props) => (
  <NavMenu
    {...props}
    sx={{
      variant: "nav.dropDownMenu",
    }}
  >
    <NavItem>
      <NavLink
        {...props}
        // className="navLink"
        sx={{
          variant: "links.dropDown",
          //   color: "#000",
        }}
      >
        1
        <SubMenu>
          <SubMenuNavItem>
            <NavSubLink
              {...props}
              sx={
                {
                  // color: "black",
                }
              }
            >
              1
            </NavSubLink>
            <NavSubLink>2</NavSubLink>
            <NavSubLink>3</NavSubLink>
          </SubMenuNavItem>
        </SubMenu>
      </NavLink>
      <NavLink>2</NavLink>
      <NavLink>3</NavLink>
      <NavLink>4</NavLink>
      <NavLink>5</NavLink>
    </NavItem>
  </NavMenu>
)

DropdownMenu.propTypes = {}

DropdownMenu.defaultProps = {}

export default DropdownMenu
