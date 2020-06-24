/** @jsx jsx */
import { jsx } from "theme-ui"
// import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
// import Logo from "../../base/Logo"
import Icon from "../../base/Icon"
import NavLink from "../../navigation/navElements/NavLink"
import NavSubLink from "../../navigation/navElements/NavSubLink"
import PropTypes from "prop-types"
import NavMenu from "../../navigation/navElements/NavMenu"
import SubMenu from "../../navigation/navElements/SubMenu"
import NavItem from "../../navigation/navElements/NavItem"
import SubMenuNavItem from "../../navigation/navElements/SubMenuNavItem"
import MegaNav from "../../presentation/MegaNav"
import NavElement from "../../navigation/navElements/NavElement"
import NavLinkIcon from "../../../components/navigation/navElements/NavLinkIcon"

//TODO fix logo box: what is forcing the extra space to the right?
//TODO something about the glyph arrow is disrupting the height and center axis alignment int he main header
//TODO delete the "NavBarLogo" component
//TODO content breaking parent when downsizing
//TODO remove iconContext provider hooks inside gatsby: unnecessary

//!Main menu will be the presentation component

const SaasMenu = (props) => (
  <>
    <NavMenu>
      <NavItem>
        <NavLink>
          Platform
          <NavLinkIcon iconName="ChevronDown" />
        </NavLink>
        <SubMenu
          {...props}
          sx={{
            width: "80vw",
          }}
        >
          <MegaNav />
        </SubMenu>
      </NavItem>
      <NavItem>
        <NavLink>Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          Enterprise
          <NavLinkIcon iconName="ChevronDown" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          Jamstack
          <NavLinkIcon iconName="ChevronDown" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Docs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Blog</NavLink>
      </NavItem>
      <NavElement
        {...props}
        sx={{
          variant: "nav.navMenuSpacer",
        }}
        className="spacer"
      />{" "}
      <NavElement
        {...props}
        sx={{
          variant: "links.navSearch",
        }}
      >
        <NavLink>
          <Icon
            iconName="Search"
            {...props}
            sx={{
              // color: "white",
              width: "2em",
              height: "1.5em",
              verticalAlign: "sub",
              ":hover": {
                color: "accent",
              },
            }}
          />
        </NavLink>
      </NavElement>
      <NavItem
        sx={{
          variant: "nav.navItem.hideSmall",
        }}
      >
        <NavLink>Contact Sales</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Log In</NavLink>
      </NavItem>
      <NavElement
        {...props}
        className="divider"
        sx={{
          variant: "nav.navMenuDivider",
        }}
      >
        |
      </NavElement>
      <NavItem>
        <NavLink>
          <span
            sx={{
              variant: "links.navCTA",
            }}
          >
            Sign Up
          </span>
          <Icon
            {...props}
            iconName="ArrowRight"
            sx={{
              width: "2.2em",
              verticalAlign: "middle",
              ":hover": {},
              variant: "nav.menuArrowRight",
            }}
          />
        </NavLink>
      </NavItem>
    </NavMenu>
  </>
)

SaasMenu.propTypes = {}

SaasMenu.defaultProps = {}

export default SaasMenu
