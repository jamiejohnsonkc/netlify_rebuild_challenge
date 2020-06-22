/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import { Link } from "gatsby"

const SecondPage = (props, data) => (
  <div>
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <Styled.p>
      <Link to="/">Go back to the homepage</Link>
    </Styled.p>
  </div>
)

export default SecondPage
