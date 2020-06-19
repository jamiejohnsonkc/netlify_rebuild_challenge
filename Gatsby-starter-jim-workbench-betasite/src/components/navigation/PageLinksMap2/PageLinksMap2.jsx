import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const PageLinksMap2 = () => {
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
        <ul className="pageLinksList">
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

export default PageLinksMap2
