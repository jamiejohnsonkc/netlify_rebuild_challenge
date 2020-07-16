/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import FlexBlock from "../FlexBlock"
import Section from "../../../base/Section"

const MonoBlock = (props) => (
  <Section
    className="section"
    sx={{
      backgroundColor: "#f1f1f1",
    }}
  >
    <Container className="Container">
      <FlexBlock {...props}>{props.flexItemContent}</FlexBlock>
    </Container>
  </Section>
)

MonoBlock.propTypes = {}

MonoBlock.defaultProps = {}

export default MonoBlock
