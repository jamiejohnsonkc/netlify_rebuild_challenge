/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "@emotion/styled"
import DynamicSiteLinks from "../DynamicSiteLinks"

const Hamburger = styled.div`
  width: 28px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 28px;
    height: 2px;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`
const NavDrawer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    height: 100vh;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false)

  return (
    <Styled.div
      as="nav"
      sx={{
        display: ["flex"],
        position: ["sticky", "relative"],
        width: "100%",
        zIndex: 2,
        alignSelf: "center",
        alignItems: "center",
        top: ["0", "null"],
        left: ["0", "null"],
        right: ["0", "null"],
        left: ["0", "null"],
        variant: "layout.nav",
        listStyleType: "none",
        lineHeight: 1.5,
      }}
    >
      <Styled.div
        className="toggle"
        NavbarOpen={NavbarOpen}
        onClick={() => setNavbarOpen(!NavbarOpen)}
        sx={{
          height: "100%",
          cursor: "pointer",
          display: ["flex", "flex", "none", "none"],
        }}
      >
        {NavbarOpen ? (
          <Hamburger sx={{ variant: "layout.nav.hamburger" }} open />
        ) : (
          <Hamburger sx={{ variant: "layout.nav.hamburger" }} />
        )}
      </Styled.div>
      {NavbarOpen ? (
        <NavDrawer
          sx={{
            variant: "layout.navbox.drawer",
          }}
        >
          {/* <DynamicSiteLinks /> */}
        </NavDrawer>
      ) : (
        <NavBox
          sx={{
            variant: "layout.navbox",
          }}
          open
        >
          {/* <DynamicSiteLinks /> */}
        </NavBox>
      )}
    </Styled.div>
  )
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar
