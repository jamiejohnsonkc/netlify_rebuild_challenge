/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
// import NavbarLinks from "../NavbarLinks"
import Logo from "../../../base/Logo"
import styled from "@emotion/styled"
// import PageLinksMap2 from "../../PageLinksMap2"
import MainMenu from "../../../presentation/MainMenu"
import { Link } from "gatsby"
// import MainNav from "../MainNav"

const Toggle = styled.div``

const Navbox = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`

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
      <Link to="/">
        <Logo
          className="mastHeadLogo"
          sx={{
            variant: "layout.mastheadLogo",
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
      {navbarOpen ? (
        <Navbox
          className="navBox"
          sx={{
            variant: "nav.navBox",
          }}
        >
          <MainMenu className="mainMenu" />
        </Navbox>
      ) : (
        <Navbox
          className="navBox"
          sx={{
            variant: "nav.navBox",
          }}
          open
        >
          <MainMenu className="mainMenu" />
        </Navbox>
      )}
    </div>
  )
}

export default Navbar
