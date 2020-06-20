/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import { Link } from "gatsby"
import NavBar from "../components/navigation/NavBar"
import MegaMenuTest from "../components/navigation/MegaMenuTest"
import SaasMasthead from "../components/presentation/SaasMasthead"
import MainMenu from "../components/navigation/MainMenu"

const SecondPage = (props, data) => (
  <div>
    <NavBar />
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <Styled.p>
      <Link to="/">Go back to the homepage</Link>
    </Styled.p>
    {/* <TestApp /> */}
    {/* <TestApp2 /> */}
    <SaasMasthead />
    <MegaMenuTest />
    <App />{" "}
  </div>
)

export default SecondPage
