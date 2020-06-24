/** @jsx jsx */
import { Styled, jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import AnnouncementBar from "../AnnouncementBar"
import SaasMasthead from "../../presentation/SaasMasthead"

const Layout = (props) => (
  <Styled.root>
    <AnnouncementBar />
    <Header>
      <SaasMasthead />
    </Header>
    <Container>
      <div
        sx={{
          display: "grid",
          gridGap: 4, // theme.space[4]
          // use arrays for mobile-first responsive styles
          gridTemplateColumns: [
            "auto", // default to a stacked layout on small screens
            "1fr 256px", // use columns for larger screens
          ],
        }}
      >
        <main>{props.children}</main>
      </div>
    </Container>
    <Footer />
  </Styled.root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
