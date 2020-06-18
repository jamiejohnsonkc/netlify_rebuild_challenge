/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Styled } from "theme-ui"
import Hamburger from "../Hamburger"
import Drawer from "../../layout/Drawer"
import SideNav from "../SideNav"
import styled from "@emotion/styled"

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

const NavMenu = (props) => {
  const [NavbarOpen, setNavbarOpen] = useState(false)

  return (
    <ul
      {...props}
      className="navMenu"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Styled.div
        className="Toggle"
        NavbarOpen={NavbarOpen}
        onClick={() => setNavbarOpen(!NavbarOpen)}
        sx={{
          height: "100%",
          cursor: "pointer",
          display: ["flex", "flex", "none", "none"],
        }}
      >
        {NavbarOpen ? (
          <Hamburger
            className="Burger"
            sx={{ variant: "layout.navbox.hamburger" }}
            open
          />
        ) : (
          <Hamburger
            className="Burger"
            sx={{ variant: "layout.navbox.hamburger" }}
          />
        )}
      </Styled.div>

      {NavbarOpen ? (
        <Drawer
          className="sideNavDrawer"
          sx={{
            variant: "layout.navbox.drawer",
          }}
        >
          <SideNav className="sideNav">howdy</SideNav>
        </Drawer>
      ) : (
        <Drawer
          className="sideNavDrawer"
          sx={{
            variant: "layout.navbox.drawer",
          }}
          open
        >
          <NavBox
            sx={{
              variant: "layout.navbox",
            }}
          >
            good ol nav
          </NavBox>
        </Drawer>
      )}
    </ul>
  )
}

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
