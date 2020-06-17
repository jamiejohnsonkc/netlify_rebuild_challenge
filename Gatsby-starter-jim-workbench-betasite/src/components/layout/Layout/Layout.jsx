/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Top from "../Top"
{
  /*
import Navbar from "../Nav/Navbar"
*/
}
import Footer from "../Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryAndSitetitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Styled.root>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: "100vh",
        }}
      >
        <Top siteTitle={data.site.siteMetadata.title} />
        {/*
        <Navbar />
     */}
        <main
          sx={{
            flex: "1 1 auto",
            width: "100%",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
