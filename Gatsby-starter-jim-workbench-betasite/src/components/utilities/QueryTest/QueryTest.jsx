import React from "react"
import { StaticQuery, graphql } from "gatsby"

const QueryTest = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              name
              link
              subMenu {
                link
                name
              }
            }
          }
        }
      }
    `}
    render={(data) => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default QueryTest

console.log
