/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/Organisms/Layout"
// import SEO from "./seo"
export const useFluidImage = () => {
  const { data } = useStaticQuery(
    graphql`
      query FluidImages {
        allFile(filter: { relativeDirectory: { eq: "saas" } }) {
          edges {
            node {
              id
              base
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
          }
        }
        imageSharp(children: {}) {
          id
        }
      }
    `
  )
  return data.FluidImages
}
