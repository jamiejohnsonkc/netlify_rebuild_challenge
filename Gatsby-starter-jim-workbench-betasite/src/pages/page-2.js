/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import SEO from "../pages/seo"
import { Link } from "gatsby"
// import TextTest from "../components/utilities/TextTest"
import Layout from "../components/layout/Layout"
import CardBlue from "../svg/assets/cardBlue.svg"
import ProPlatform from "../components/production/proSections/ProPlatform"
import Test from "../components/base/Test"

import gradients from "@gradients"
import ProCompTest from "../../../jim-workbench-custom-presentation/src/ProFolderTest/ProCompTest"

const SecondPage = (props, data) => (
  <Layout>
    <Styled.h1>Hi from the second page</Styled.h1>
    <Styled.p>Welcome to page 2</Styled.p>
    <Test />
    <ProPlatform />
    <Styled.p>
      <Link to="/">Go back to the homepage</Link>
      <div
        {...props}
        sx={{
          background: gradients.defined.highlight.background,
        }}
      >
        <ProCompTest />
        help
      </div>
    </Styled.p>
  </Layout>
)

export default SecondPage
