/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import useBackgroundImage from "./useBackgroundImage"

// const BackgroundContainer = ({
//   height,
//   width,
//   backgroundPosition,
//   backgroundRepeat,
//   backgroundSize,
//   ...props
// }) => (
//   <Box
//     {...props}
//     sx={{
//       height,
//       width,
//       backgroundPosition,
//       backgroundRepeat,
//       backgroundSize,
//     }}
//   />
// )

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const BackgroundImageContainer = ({ className }) => {
  const data = useBackgroundImage()
  return (
    <BackgroundContainer>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={data}
        backgroundColor={`#040e18`}
        sx={{
          height: "100%",
        }}
      >
        <h1>From the comp</h1>
      </BackgroundImage>
    </BackgroundContainer>
  )
}

export default BackgroundImageContainer

// BackgroundContainer.propTypes = {
//   backgroundPosition: PropTypes.any,
//   backgroundRepeat: PropTypes.any,
//   backgroundSize: PropTypes.any,
//   height: PropTypes.any,
//   width: PropTypes.any,
// }

// BackgroundContainer.defaultProps = {
//   backgroundPosition: "bottom center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   width: "100%",
// }
