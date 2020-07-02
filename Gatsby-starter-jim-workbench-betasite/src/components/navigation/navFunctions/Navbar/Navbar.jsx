/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import Logo from "../../../base/Logo"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navbox from "../Navbox"
import Hamburger from "../../Hamburger/Hamburger"

//* This comp provides responsive functionality, defines and houses the key components used in the main nav menu (Navbar, Logo, Hamburger And the NavBox containing the desktop and mobile menu formats)

const Toggle = styled.div``

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
