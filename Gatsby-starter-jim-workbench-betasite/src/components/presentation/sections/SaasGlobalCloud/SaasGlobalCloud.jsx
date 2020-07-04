/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import Section_Grid_1r_66Text_33Visual from "../../../templates/Section_Grid_1r_66Text_33Visual"
import Cloud from "../../../../svg/assets/cloud.svg"
import SplitTextLine from "../../../base/SplitTextLine/SplitTextLine"

// const SplitText = ({ textline1, textline2, ...props }) => (
//   <>

// />
//   </>
// )

// SplitText = {
//   textLine1: "Global by default.",
//   textLine2: "Multi-cloud by design.",
// }

const SaasGlobalCloud = (props) => {
  const SplitText = () => (
    <SplitTextLine
      textLine1="Global by default."
      textLine2="Multi-cloud by design."
    />
  )

  return (
    <Pancake
      as="Section"
      {...props}
      sx={{
        variant: "layout.section",
      }}
    >
      <Container
        {...props}
        className="Container"
        sx={{
          variant: "layout.containerNarrow",
        }}
      >
        <Section_Grid_1r_66Text_33Visual
          displayText="Distributed just like a CDN, but with advanced functionality for publishing entire sites and applications. Automate builds to prerender content and deploy worldwide to every major cloud provider—including staging, rollbacks, and even A/B testing."
          subheadText="A global platform with powerful features for managing code and assets."
          headerText={<SplitText />}
          visual={<Cloud />}
        />
      </Container>
    </Pancake>
  )
}

SaasGlobalCloud.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

SaasGlobalCloud.defaultProps = {}

export default SaasGlobalCloud
