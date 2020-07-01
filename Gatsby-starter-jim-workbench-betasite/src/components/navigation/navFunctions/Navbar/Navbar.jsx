/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
// import NavbarLinks from "../NavbarLinks"
import Logo from "../../../base/Logo"
import styled from "@emotion/styled"
// import PageLinksMap2 from "../../PageLinksMap2"
import MainMenu from "../../../presentation/MainMenu"
import { Link } from "gatsby"
import Navbox from "../Navbox"
import { transparentize } from "@theme-ui/color"
// import MainNav from "../MainNav"

const Toggle = styled.div``

const Hamburger = styled.div`
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    content: "";
    position: absolute;
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

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div
      sx={{
        variant: "nav.navBar",
      }}
      className="navBar"
    >
      <Link
        to="/"
        {...props}
        className="MastheadLogoLink"
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <Logo
          className="mastHeadLogo"
          sx={{
            variant: "nav.mastHeadLogo",
          }}
        />
      </Link>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="Toggle"
        sx={{
          variant: "nav.toggle",
        }}
      >
        {navbarOpen ? (
          <Hamburger
            sx={{
              variant: "nav.hamburger",
            }}
            open
          />
        ) : (
          <Hamburger
            sx={{
              variant: "nav.hamburger",
            }}
          />
        )}
      </Toggle>
      {navbarOpen ? <Navbox /> : <Navbox open />}
    </div>
  )
}

export default Navbar
