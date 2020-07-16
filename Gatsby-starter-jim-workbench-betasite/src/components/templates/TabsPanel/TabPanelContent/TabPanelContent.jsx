/** @jsx jsx */
import {
  jsx,
  Grid,
  Box,
  Styled,
  Text,
  height,
  width,
  margin,
  css,
  Container,
} from "theme-ui"
import CtaLink from "../../../base/CtaLink/CtaLink"

import { slideUp1 } from "../../../../../../customStyles/exThemeUi/animation"

const ImageWrapper = (props) => (
  <Box
    {...props}
    sx={{
      "> .gatsby-image-wrapper": {
        borderRadius: 6,
      },
    }}
  />
)

const TabPanelContent = ({
  height,
  width,
  bg,
  color,
  padding,
  margin,
  data,
  ...props
}) => {
  return (
    <Grid
      {...props}
      // columns={(5, "1fr 2fr 1fr 1fr")}
      sx={{
        height,
        width,
        bg,
        color,
        margin,
        gridTemplateColumns: [
          (1, "1fr"),
          (2, "1fr 1fr"),
          (5, "1fr 2fr 1fr 1fr"),
        ],
        gap: [4, 4, 2, 2],
        paddingBottom: [0, 4, 4, 4],
        justifyContent: ["center"],
      }}
    >
      <Box
        {...props}
        sx={{
          alignContent: "start",
          display: "grid",
        }}
      >
        <ImageWrapper>
          {/* <ProofTabsCafe /> */}
          {props.tabsVisual}
        </ImageWrapper>
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
        }}
      >
        <Box px={4}>
          <Styled.h2
            {...props}
            sx={{
              marginBottom: 3,
            }}
          >
            {props.textHeadline}
          </Styled.h2>
          <Styled.p
            {...props}
            sx={{
              marginBottom: 4,
              maxWidth: "94%",
            }}
          >
            {props.textBody}
          </Styled.p>
          <CtaLink
            linkText="Read the case study"
            iconName="ArrowRight"
            iconSize="1em"
            color="inherit"
            to={props.tabsCtaLinkTo}
            sx={{
              variant: "links.ctaLink.arrowRight",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          />
        </Box>
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        <Text
          {...props}
          sx={{
            variant: "styles.b2",
            color: "highlight",
            marginBottom: 1,
            textAlign: "center",
          }}
        >
          {props.metric1}
        </Text>
        <Text
          {...props}
          sx={{
            fontSize: 0,
            variant: "text.capsBold",
            textAlign: "center",
          }}
        >
          {props.metricCaption1}
        </Text>
      </Box>
      <Box
        {...props}
        sx={{
          display: "grid",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        <Text
          {...props}
          sx={{
            variant: "styles.b2",
            color: "highlight",
            marginBottom: 1,
            textAlign: "center",
          }}
        >
          {props.metric2}
        </Text>
        <Text
          {...props}
          sx={{
            fontSize: 0,
            variant: "text.capsBold",
            textAlign: "center",
          }}
        >
          {props.metricCaption2}
        </Text>
      </Box>
    </Grid>
  )
}

export default TabPanelContent
