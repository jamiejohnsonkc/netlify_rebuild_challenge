import React, { Component } from "react"
import MyLink from "../base/MyLink"

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        id: "1",
        description: "Prisma turns your database into a GraphQL API 😎",
        url: "https://www.prismagraphql.com",
      },
      {
        id: "2",
        description: "The best GraphQL client",
        url: "https://www.apollographql.com/docs/react/",
      },
    ]

    return (
      <div>
        {linksToRender.map((link) => (
          <MyLink key={link.id} link={link} />
        ))}
      </div>
    )
  }
}

export default LinkList
