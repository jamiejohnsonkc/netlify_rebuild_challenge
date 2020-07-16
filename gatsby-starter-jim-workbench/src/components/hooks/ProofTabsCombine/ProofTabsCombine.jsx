/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query imageCombine {
      file(relativePath: { eq: "pro/combine.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt="Test" />
}
