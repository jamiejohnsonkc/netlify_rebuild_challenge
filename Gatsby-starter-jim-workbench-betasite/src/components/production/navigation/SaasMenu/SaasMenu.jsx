/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
// import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Icon from "../../../base/Icon"
import PropTypes from "prop-types"
import NavLink from "../../../navigation/navElements/NavLink"
import NavMenu from "../../../navigation/navElements/NavMenu"
import SubMenu from "../../../navigation/navElements/SubMenu"
import NavItem from "../../../navigation/navElements/NavItem"
import MegaNav from "../../../production/navigation/MegaNav"
import NavItemSpacer from "../../../navigation/navElements/NavItemSpacer"
import NavLinkIcon from "../../../navigation/navElements/NavLinkIcon"
import NavElement from "../../../navigation/navElements/NavElement"
import NavLinkSearch from "../../../navigation/navElements/NavLinkSearch"
import CtaLink from "../../../base/CtaLink"
import JumpLink from "../../../navigation/navElements/JumpLink"
import SubSubMenu from "../../../navigation/navElements/SubSubMenu"
import SubMenuNavItem from "../../../navigation/navElements/SubMenuNavItem"

//TODO fix logo box: what is forcing the extra space to the right?
//TODO something about the glyph arrow is disrupting the height and center axis alignment int he main header
//TODO delete the "NavBarLogo" component
//TODO content breaking parent when downsizing
//TODO remove iconContext provider hooks inside gatsby: unnecessary

//* This is the production component for nav menu.  It defines the menus, items, links, submenus, etc. Due to this menu's complexity this element is not derived from a reusable component.

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
            variant: "nav.subMenu",
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
        <SubMenu>
          <Box
            {...props}
            sx={{
              variant: "nav.subMenuBox",
            }}
          >
            <Styled.h4
              sx={{
                variant: "text.caps",
                color: "highlight",
              }}
            >
              Netlify Enterprise
            </Styled.h4>
            <SubSubMenu>
              <SubMenuNavItem>
                <JumpLink to="/">High-Performance Products</JumpLink>
              </SubMenuNavItem>
              <SubMenuNavItem>
                <JumpLink to="/">Customers</JumpLink>
              </SubMenuNavItem>
              <SubMenuNavItem>
                <JumpLink to="/">Enterprise Whitepaper</JumpLink>
              </SubMenuNavItem>
              <SubMenuNavItem>
                <JumpLink to="/">Security at Netlify</JumpLink>
              </SubMenuNavItem>
            </SubSubMenu>
          </Box>
        </SubMenu>
      </NavItem>

      <NavItem>
        <NavLink>
          Jamstack
          <NavLinkIcon iconName="ChevronDown" />
        </NavLink>
        <SubMenu
          {...props}
          sx={{
            variant: "nav.subMenu",
          }}
        >
          <Box
            {...props}
            sx={{
              variant: "nav.subMenuBox",
            }}
          >
            <Styled.h4
              sx={{
                variant: "text.caps",
                color: "highlight",
              }}
            >
              Netlify Enterprise
            </Styled.h4>
            <SubSubMenu>
              <SubMenuNavItem>
                <JumpLink to="/">Jamstack Introduction</JumpLink>
              </SubMenuNavItem>
              <SubMenuNavItem>
                <JumpLink to="/">Jamstack Book</JumpLink>
              </SubMenuNavItem>
              <SubMenuNavItem>
                <JumpLink to="/">Jamstack Conference</JumpLink>
              </SubMenuNavItem>
            </SubSubMenu>
          </Box>
        </SubMenu>
      </NavItem>
      <NavItem>
        <NavLink>Docs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Blog</NavLink>
      </NavItem>
      <NavItemSpacer
        sx={{
          variant: "nav.navItemSpacer",
        }}
      />

      <NavItem
        {...props}
        sx={{
          variant: "nav.navItemSearch",
        }}
      >
        <NavLinkSearch
          sx={{
            variant: "links.navLinkSearch",
          }}
        >
          <Icon
            iconName="Search"
            sx={{
              variant: "links.navLinkSearchIcon",
            }}
          />
        </NavLinkSearch>
      </NavItem>

      <NavItem
        sx={{
          variant: "nav.navItem.hideSmall",
        }}
      >
        <NavLink
          to="/contact"
          {...props}
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Contact Sales
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Log In</NavLink>
      </NavItem>
      <NavElement
        {...props}
        className="divider"
        sx={{
          variant: "nav.navMenuDivider",
          color: "navMenuItem",
          textDecoration: "none",
        }}
      >
        |
      </NavElement>
      <NavItem>
        <NavLink>
          <CtaLink
            to="/"
            linkText="Sign Up"
            iconName="ArrowRight"
            iconSize="1em"
            iconColor="theme.colors.menuNavItem"
            sx={{
              variant: "links.ctaLink.arrowRight",
              textDecoration: "none",
              lineHeight: "1.5",
              "&:hover": {
                textDecoration: "underline",
              },
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
