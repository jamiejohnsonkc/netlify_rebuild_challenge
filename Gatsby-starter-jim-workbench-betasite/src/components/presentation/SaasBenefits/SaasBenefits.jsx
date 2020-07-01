/** @jsx jsx */
import { jsx, Box, Container, Grid, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../layout/Pancake"
import Grid_1r_25_75 from "../../layout/Grid/Grid_1r_25_75/Grid_1r_25_75"
import Grid_1r_75_25 from "../../layout/Grid/Grid_1r_75_25"
import SaasCloud from "../../../svg/assets/saasCloud.svg"
import SaasSecurity from "../../../svg/assets/saasSecurity.svg"
import SaasWorkflow from "../../../svg/assets/saasWorkflow.svg"
import SaasActivate from "../../../svg/assets/saasActivate.svg"

const SaasBenefits = (props) => (
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
        variant: "layout.containerNarrow",
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
      <Grid_1r_75_25
        visual={<SaasCloud />}
        header="Faster sites & applications"
        body="Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance."
      />

      <Grid_1r_25_75
        visual={<SaasSecurity />}
        header="Extremely reliable. Extremely secure."
        body="Publish apps across multiple cloud providers for ultimate reliability. And since apps are prerendered, all edge nodes serve secure, static content with little opportunity for exploit.
        "
      />

      <Grid_1r_75_25
        visual={<SaasWorkflow />}
        header="Beautiful workflows"
        body="Connect to Git for instant continuous delivery. Pull requests can generate automatic previews and every branch can be a different staging site. Every deployment is preserved allowing instant rollbacks to any prior state, without rebuilding."
      />
      <Grid_1r_25_75
        visual={<SaasActivate />}
        header="Zero infrastructure required"
        body="Deploy direct to Netlify Edge to replace production servers, staging servers, deployment systems, and CDN caching."
      />
    </Container>
  </Pancake>
)

SaasBenefits.propTypes = {
  // displayText: PropTypes.any,
  // headerText: PropTypes.any,
  // subheadText: PropTypes.any,
  // visual: PropTypes.any,
}

SaasBenefits.defaultProps = {}

export default SaasBenefits
