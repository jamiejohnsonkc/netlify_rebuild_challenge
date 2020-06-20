/** @jsx jsx */
import { Styled, jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import LinkList3 from "../../base/LinkList3"
// import LinkList3 from "../../../../../jim-workbench-custom-presentation/LinkList3"

{
  /*
import Navbar from "../../../../../jim-workbench-custom-presentation/Nav/Navbar"
*/
}
// import DynamicSiteLinks from "../Nav/DynamicSiteLinks"
// import Navbar from "../Nav/Navbar"
import Footer from "../Footer"
import SaasMasthead from "../../presentation/SaasMasthead"

const Layout = ({ children }) => (
  <Styled.root>
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: "100vh",
      }}
    >
      {/*
        <DynamicSiteLinks />
       */}
      <SaasMasthead />
      {/* <LinkList3 /> */}
      <main
        sx={{
          flex: "1 1 auto",
          width: "100%",
        }}
      >
        <Container>
          {/* <Navbar /> */}
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  </Styled.root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
