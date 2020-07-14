/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import { Link } from "gatsby"
// import TextTest from "../components/utilities/TextTest"
import Layout from "../components/layout/Layout"
import CardBlue from "../svg/assets/cardBlue.svg"
import SaasPlatform from "../components/production/sections/SaasPlatform"

const SecondPage = (props, data) => (
  <Layout>
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <CardBlue />
    <SaasPlatform />
    <Styled.p>
      <Link to="/">Go back to the homepage</Link>
    </Styled.p>
  </Layout>
)

export default SecondPage
