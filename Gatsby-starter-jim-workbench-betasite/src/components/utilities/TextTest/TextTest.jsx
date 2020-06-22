/** @jsx jsx */
import { jsx, Styled, Text } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { MainNavLink } from "../../navigation/MainNavLink"

const TextTest = (props) => (
  <div>
    <Text
      {...props}
      sx={{
        variant: "styles.b1",
        marginBottom: "6",
      }}
    >
      Busker Text 1
    </Text>
    <Text
      {...props}
      sx={{
        variant: "styles.b2",
        marginBottom: "6",
      }}
    >
      Busker Text 2
    </Text>
    <Text
      {...props}
      sx={{
        variant: "styles.b3",
        marginBottom: "6",
      }}
    >
      Busker Text 3
    </Text>
    <Styled.h1>Heading h1</Styled.h1>
    <Text variant="styles.d1">
      This is display text d1 for brief and powerful summaries. Voluptate
      proident commodo deserunt id Lorem culpa aute ea dolore.
    </Text>
    <Styled.h2>Heading h2</Styled.h2>
    <Text variant="styles.d2">
      This is display text 2 for brief and powerful summaries.Laboris est aute
      tempor ullamco commodo ullamco excepteur mollit fugiat.
    </Text>
    <Styled.h3>Heading h3</Styled.h3>
    <Text variant="styles.d3">
      This is display text d3 for brief and powerful summaries.Et excepteur
      laborum id ea dolor irure ipsum laborum tempor amet cupidatat voluptate.
    </Text>
    <Styled.h4>Heading h4</Styled.h4>
    <Styled.h5>Heading h5</Styled.h5>
    <Styled.h6>Heading h6</Styled.h6>

    <div>
      <Styled.div
        sx={{
          variant: "links.mainNavLink",
        }}
      >
        Main Nav Link 1
      </Styled.div>
      <Styled.div
        sx={{
          variant: "links.mainNavLink",
        }}
      >
        Main Nav Link 2
      </Styled.div>
      <Styled.div
        sx={{
          variant: "links.mainNavLink",
        }}
      >
        Main Nav Link 3
      </Styled.div>
    </div>

    <Styled.p
      sx={{
        fontWeight: "bold",
      }}
    >
      The following is standard body font size:
    </Styled.p>

    <Styled.p
      {...props}
      sx={{
        width: ["100%", "83.82%", "61.8%", "50%"],
      }}
    >
      Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do veniam
      elit quis eu veniam. Qui dolore ullamco nisi minim do cupidatat esse.
      Consectetur occaecat consequat incididunt voluptate duis ut dolor
      consequat ex proident irure dolor pariatur consectetur.
    </Styled.p>
    <Styled.p
      {...props}
      sx={{
        width: ["100%", "83.82%", "61.8%", "50%"],
      }}
    >
      Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do veniam
      elit quis eu veniam. Qui dolore ullamco nisi minim do cupidatat esse.
      Consectetur occaecat consequat incididunt voluptate duis ut dolor
      consequat ex proident irure dolor pariatur consectetur.
    </Styled.p>

    <Text
      variant="styles.p2"
      sx={{
        fontWeight: "bold",
      }}
    >
      The following is the large body font size:
    </Text>
    <Text
      variant="styles.p2"
      {...props}
      sx={{
        width: ["100%", "83.82%", "61.8%", "50%"],
      }}
    >
      Qui pariatur ut ea laboris Lorem eu voluptate consectetur sit nulla ex
      adipisicing amet consectetur. Minim duis elit dolor commodo sint enim do
      consequat. Occaecat pariatur consectetur ipsum id magna. Veniam non ad do
      ipsum ut nulla veniam eiusmod cupidatat sit aliquip.
    </Text>

    <Text
      variant="styles.p2"
      {...props}
      sx={{
        width: ["100%", "83.82%", "61.8%", "50%"],
      }}
    >
      Styled Paragraph Esse sunt qui nostrud non quis nisi adipisicing do veniam
      elit quis eu veniam. Qui dolore ullamco nisi minim do cupidatat esse.
      Consectetur occaecat consequat incididunt voluptate duis ut dolor
      consequat ex proident irure dolor pariatur consectetur.
    </Text>
  </div>
)

TextTest.propTypes = {}

TextTest.defaultProps = {}

export default TextTest
