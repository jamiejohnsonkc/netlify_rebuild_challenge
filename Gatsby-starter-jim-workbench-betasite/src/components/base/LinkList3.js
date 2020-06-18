import React, { Component } from "react"
// import MyLink3 from "./MyLink3"
import { StaticQuery, graphql } from "gatsby"

const LinkList3 = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
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
      render={(data) => (
        <ul>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li key={link.name} link={link}>
              {link.name}
              {link.subMenu && link.subMenu.length > 0 ? (
                <ul aria-label="submenu">
                  {link.subMenu.map((subLink) => (
                    <li key={subLink.name}>
                      <a href={subLink.link}>{subLink.name}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    />
  )
}

export default LinkList3
