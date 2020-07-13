/** @jsx jsx */
import { jsx, Box, Text, Grid, Styled, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import Technology from "../../../../svg/assets/technology.svg"

const SaasTechnology = (props) => (
  <Pancake
    {...props}
    sx={{
      paddingTop: 4,
      paddingBottom: 5,
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
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        The technology behind Netlify Edge
      </Styled.h1>
      <Grid columns={[1, "2fr 1fr"]}>
        <Box
          display="grid"
          {...props}
          sx={{
            order: [2, 2, 1, 1],
          }}
        >
          <Styled.h3>Develop modularly. Deploy collectively</Styled.h3>
          <Text
            sx={{
              variant: "styles.p2",
              marginBottom: 4,
              paddingRight: 2,
            }}
          >
            Netlify supports atomic deployment of your sites and apps, allowing
            you to push sets of changes to frontend code and backend functions
            together, as a unit, without even requiring a maintenance window.
          </Text>
          <Styled.h3>Atomic deploys. Instant cache invalidation.</Styled.h3>
          <Text
            sx={{
              variant: "styles.p2",
              marginBottom: 4,
              paddingRight: 2,
            }}
          >
            Cache control on most CDNs is tricky business. On Netlify, every
            global deploy is an atomic unit representing a state in time of your
            application. Worldwide caches are updated instantly, supporting
            richer applications than possible on a CDN. Deploy thousands of
            times daily without any risk of partial deploys or stale assets.
          </Text>
          <Styled.h3>Worldwide intelligence</Styled.h3>
          <Text
            sx={{
              variant: "styles.p2",
              marginBottom: 4,
              paddingRight: 2,
            }}
          >
            Global edge nodes all have built-in intelligence to natively serve
            A/B tests, phased rollouts, or geographic variations. Advance DNS
            management and network rules support user authentication, per-page
            routing, and even proxying to multiple legacy applications—all on
            the same domain.
          </Text>
        </Box>
        <Box
          display="grid"
          {...props}
          sx={{
            order: [1, 1, 2, 2],
          }}
        >
          <Technology />
        </Box>
      </Grid>
    </Container>
  </Pancake>
)

SaasTechnology.propTypes = {}

SaasTechnology.defaultProps = {}

export default SaasTechnology
