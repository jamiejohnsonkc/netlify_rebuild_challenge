/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../layout/Pancake"
import TabsBlock from "../../layout/TabsBlock"

const ProofTabs = (props) => (
  <Pancake variant="layout.section">
    {/* <ColorModeCycler />
      <ColorModeToggle /> */}
    <Container
      {...props}
      sx={{
        boxShadow: "test5",
        py: 4,
      }}
    >
      <TabsBlock />
    </Container>
  </Pancake>
)

ProofTabs.propTypes = {}

ProofTabs.defaultProps = {}

export default ProofTabs
