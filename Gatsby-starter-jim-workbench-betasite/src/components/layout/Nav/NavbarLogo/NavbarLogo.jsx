/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "@emotion/styled"
import DynamicSiteLinks from "../DynamicSiteLinks"

import Logo from "../../../base/Logo"

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
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    height: 100vh;
    background-color: ;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

const NavbarLogo = () => {
  const [NavbarLogoOpen, setNavbarLogoOpen] = useState(false)

  return (
    <Styled.div
      as="nav"
      sx={{
        height: ["8vh", "10vh"],
        display: "flex",
        position: ["sticky", "relative"],
        width: "100%",
        margin: "0 auto",
        zIndex: 2,
        py: 4,
        px: 3,
        alignSelf: "center",
        alignItems: "center",
        top: ["0", "null"],
        left: ["0", "null"],
        right: ["0", "null"],
        left: ["0", "null"],
        variant: "layout.navLogo",
      }}
    >
      <Styled.div
        as="toggle"
        NavbarLogoOpen={NavbarLogoOpen}
        onClick={() => setNavbarLogoOpen(!NavbarLogoOpen)}
        sx={{
          height: "100%",
          cursor: "pointer",
          display: ["flex", "none"],
        }}
      >
        {NavbarLogoOpen ? <Hamburger open /> : <Hamburger />}
      </Styled.div>
      {NavbarLogoOpen ? (
        <NavBox>
          <DynamicSiteLinks />
        </NavBox>
      ) : (
        <NavBox open>
          <Link
            href="/"
            sx={{
              width: "10em",
            }}
          >
            <Logo />
          </Link>
          <DynamicSiteLinks />
        </NavBox>
      )}
    </Styled.div>
  )
}

NavbarLogo.propTypes = {}

NavbarLogo.defaultProps = {}

export default NavbarLogo
