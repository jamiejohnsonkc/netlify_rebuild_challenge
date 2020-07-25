/** @jsx jsx */
import { jsx, colors, Box } from "theme-ui"
import React from "react"
import BackgroundImageContainer from "./BackgroundImageContainer"
import useBackgroundImage from "./useBackgroundImage.jsx"
import styled from "@emotion/styled"

export default {
  title: "BackGroundImg",
}

export const standard = () => <BackgroundImageContainer />

// const BackgroundContainer = ({
//   width,
//   backgroundPosition,
//   backgroundRepeat,
//   backgroundSize,
//   ...props
// }) => (
//   <Box
//     {...props}
//     sx={{
//       width,
//       backgroundPosition,
//       backgroundRepeat,
//       backgroundSize,
//     }}
//   />
// )

const StyledBIC = styled.div`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

// export const standard = ({ className, props }) => {
//   const data = useBackgroundImage()
//   return (
//     <StyledBIC>
//       <BackgroundImageContainer
//         backgroundImageTag="section"
//         backgroundImageClassName={className}
//         backgroundImageFluid={data}
//         backgroundImageBackgroundColor="white"
//       ></BackgroundImageContainer>
//     </StyledBIC>
//   )
// }

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

// Tag="section"
// className={className}
// fluid={data}
// backgroundColor={`#040e18`}

// const StyledBIC = styled.div`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

// export const standard = ({ className }) => (
//   <>
//     <StyledBIC>
//       <BackgroundImage
//         Tag="section"
//         className={className}
//         fluid={imageData}
//         backgroundColor={`#040e18`}
//       >
//         hi
//       </BackgroundImage>
//     </StyledBIC>
//   </>
// )
