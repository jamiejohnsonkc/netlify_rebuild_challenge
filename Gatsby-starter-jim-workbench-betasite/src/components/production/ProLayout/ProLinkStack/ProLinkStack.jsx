/** @jsx jsx */
import { jsx, Container, Styled, Grid, Box } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Pancake from "../../../layout/Pancake"
import JumpLink from "../../../navigation/navElements/JumpLink"
import { color } from "jim-workbench-custom-themes/colors"

const LinkStack = (props) => (
  <Box
    {...props}
    sx={{
      fontSize: [0, 0, 1, 1],
      "& > a": {
        display: "block",
        color: `${color.gray3}`,
        fontWeight: 400,
      },
      "& > a:hover": {
        textDecoration: "underline",
      },
    }}
  />
)

const ProLinkStack = (props) => (
  <Pancake {...props}>
    <Container
      {...props}
      sx={{
        borderTop: `thin solid ${color.gray5}`,
        borderBottom: `thin solid ${color.gray5}`,
      }}
    >
      <Grid
        columns={[2, 3, 5, 5]}
        {...props}
        sx={{
          py: 5,
          width: "83%",
          margin: `0 auto`,
        }}
      >
        <LinkStack>
          <Styled.h4>Why Netlify</Styled.h4>
          <JumpLink to="/">Customers</JumpLink>
          <JumpLink to="/">Enterprise</JumpLink>
          <JumpLink to="/">Whitepaper</JumpLink>
        </LinkStack>
        <LinkStack>
          <Styled.h4>Products</Styled.h4>
          <JumpLink to="/">Platform</JumpLink>
          <JumpLink to="/">Netlify Build</JumpLink>
          <JumpLink to="/">Netlify Edge</JumpLink>
          <JumpLink to="/">Netlify Dev</JumpLink>
          <JumpLink to="/">Pricing</JumpLink>
          <JumpLink to="/">Add-ons</JumpLink>
        </LinkStack>
        <LinkStack>
          <Styled.h4>Resources</Styled.h4>
          <JumpLink to="/">Docs</JumpLink>
          <JumpLink to="/">Open Source</JumpLink>
          <JumpLink to="/">Jamstack book</JumpLink>
          <JumpLink to="/">Security</JumpLink>
          <JumpLink to="/">Technologies</JumpLink>
        </LinkStack>

        <LinkStack>
          <Styled.h4>Contact us</Styled.h4>
          <JumpLink to="/">Sales</JumpLink>
          <JumpLink to="/">Support</JumpLink>
          <JumpLink to="/">Status</JumpLink>
          <JumpLink to="/">Community</JumpLink>
        </LinkStack>

        <LinkStack>
          <Styled.h4>Company</Styled.h4>
          <JumpLink to="/">Blog</JumpLink>
          <JumpLink to="/">About</JumpLink>
          <JumpLink to="/">Careers</JumpLink>
          <JumpLink to="/">Press</JumpLink>
        </LinkStack>
      </Grid>
    </Container>
  </Pancake>
)

ProLinkStack.propTypes = {}

ProLinkStack.defaultProps = {}

export default ProLinkStack
