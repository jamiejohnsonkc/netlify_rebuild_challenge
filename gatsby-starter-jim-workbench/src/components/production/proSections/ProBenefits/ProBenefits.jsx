/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import ProCloud from "../../../../svg/assets/proCloud.svg"
import ProSecurity from "../../../../svg/assets/proSecurity.svg"
import ProWorkflow from "../../../../svg/assets/proWorkflow.svg"
import ProActivate from "../../../../svg/assets/proActivate.svg"
import Grid_1r_75_Text_25_Visual from "../../../templates/Grid_1r_75_Text_25_Visual"
import Grid_1r_25_Visual_75_Text from "../../../templates/Grid_1r_25_Visual_75_Text"

import animation from "@animation"

const ProBenefits = (props) => (
  <Pancake
    as="Section"
    {...props}
    sx={{
      variant: "layout.section",
      bg: "muted",
    }}
  >
    <Container
      {...props}
      sx={{
        variant: "layout.containerTight",
      }}
    >
      <Styled.h1
        {...props}
        sx={{
          textAlign: "center",
          mb: 2,
          pb: 4,
        }}
      >
        The benefits of Netlify Edge
      </Styled.h1>
      <Grid_1r_25_Visual_75_Text
        visual={<ProCloud />}
        {...animation.slideUp1}
        header="Faster sites & applications"
        body="Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance."
      />

      <Grid_1r_75_Text_25_Visual
        visual={<ProSecurity />}
        header="Extremely reliable. Extremely secure."
        body="Publish apps across multiple cloud providers for ultimate reliability. And since apps are prerendered, all edge nodes serve secure, static content with little opportunity for exploit.
        "
      />

      <Grid_1r_25_Visual_75_Text
        visual={<ProWorkflow />}
        header="Beautiful workflows"
        body="Connect to Git for instant continuous delivery. Pull requests can generate automatic previews and every branch can be a different staging site. Every deployment is preserved allowing instant rollbacks to any prior state, without rebuilding."
      />
      <Grid_1r_75_Text_25_Visual
        visual={<ProActivate />}
        header="Zero infrastructure required"
        body="Deploy direct to Netlify Edge to replace production servers, staging servers, deployment systems, and CDN caching."
      />
    </Container>
  </Pancake>
)

ProBenefits.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

ProBenefits.defaultProps = {}

export default ProBenefits
