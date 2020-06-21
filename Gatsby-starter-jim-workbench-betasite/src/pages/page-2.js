/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import { Link } from "gatsby"

import NavMenu from "../components/navigation/NavMenu"
import SaasMasthead from "../components/presentation/SaasMasthead"
import NavBar from "../components/navigation/NavBar"

const SecondPage = (props, data) => (
  <div>
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <Styled.p>
      <Link to="/">Go back to the homepage</Link>
    </Styled.p>
    {/* <TestApp /> */}
    {/* <TestApp2 /> */}

    <NavBar>
      <NavMenu />
    </NavBar>
  </div>
)

export default SecondPage
