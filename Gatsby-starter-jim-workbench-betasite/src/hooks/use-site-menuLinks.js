import { useStaticQuery, graphql } from "gatsby"
export const useSiteMenuLinks = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
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
    `
  )
  return site.siteMetadata.menuLinks.subMenu
}
