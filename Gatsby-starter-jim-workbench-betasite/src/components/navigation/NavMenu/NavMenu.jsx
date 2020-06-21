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

// const NavBar = (props) => (
//   <Styled.div
//     {...props}
//     as="nav"
//     className="navBar"
//     sx={{
//       display: ["flex"],
//       position: ["sticky", "relative"],
//       zIndex: 2,
//       top: ["0", "null"],
//       left: ["0", "null"],
//       right: ["0", "null"],
//       left: ["0", "null"],
//       listStyleType: "none",
//       variant: "layout.navBarWDrawer",
//     }}
//   />
// )

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
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const NavMenu = (props) => {
  const [NavbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
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
            <Hamburger
              className="Burger"
              sx={{ variant: "layout.hamburger" }}
            />
          )}
        </Styled.div>

        {NavbarOpen ? (
          <Navbox
            className="Navbox"
            sx={{
              variant: "layout.navbox",
            }}
          >
            <PageLinksMap2 />
            {/* <SideNav className="sideNav" /> */}
          </Navbox>
        ) : (
          <Navbox Open>
            <MainMenu />
          </Navbox>
        )}
      </Styled.div>
    </>
  )
}

NavMenu.propTypes = {}

NavMenu.defaultProps = {}

export default NavMenu
