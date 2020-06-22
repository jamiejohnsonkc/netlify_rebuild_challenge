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
import PageLinksMap2 from "../PageLinksMap2"

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: transparent;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const NavMenu = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

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
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        sx={{
          height: "100%",
          cursor: "pointer",
          display: ["flex", "flex", "none", "none"],
        }}
      >
        {navbarOpen ? (
          <Hamburger sx={{ variant: "layout.hamburger" }} open />
        ) : (
          <Hamburger sx={{ variant: "layout.hamburger" }} />
        )}
      </Styled.div>

      {navbarOpen ? (
        <Drawer
          className="Drawer"
          sx={{
            variant: "layout.sideNavDrawer",
          }}
        >
          <SideNav className="sideNav" />
        </Drawer>
      ) : (
        <MainMenu />
      )}
    </Styled.div>
  )
}

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
