/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Styled } from "theme-ui"
import Hamburger from "../Hamburger"
import Drawer from "../../layout/Drawer"
import SideNav from "../SideNav"
import MainMenu from "../MainMenu"
import styled from "@emotion/styled"

const NavMenu = (props) => {
  const [NavbarOpen, setNavbarOpen] = useState(false)

  return (
    <Styled.div
      {...props}
      className="navMenu"
      sx={{
        variant: "layout.navMenu",
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
            className="hamburger"
            sx={{ variant: "layout.hamburger" }}
            open
          />
        ) : (
          <Hamburger className="Burger" sx={{ variant: "layout.hamburger" }} />
        )}
      </Styled.div>

      {NavbarOpen ? (
        <Drawer
          className="sideNavDrawer"
          sx={{
            variant: "layout.sideNavDrawer",
          }}
        >
          <SideNav className="sideNav" />
        </Drawer>
      ) : (
        <MainMenu open />
      )}
    </Styled.div>
  )
}

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
