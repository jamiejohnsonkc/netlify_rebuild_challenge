import React, { Component } from "react"
import MyLink2 from "./MyLink2"

class LinkList2 extends Component {
  render() {
    const menuLinks = [
      {
        name: "page2",
        link: "/page-2",
      },
      {
        name: "page3",
        link: "/page-3",
      },
      {
        name: "page4",
        link: "/page-4",
      },
      {
        name: "page5",
        link: "/page-5",
      },
    ]

    return (
      <div>
        {menuLinks.map((link) => (
          <MyLink2 key={link.name} link={link} />
        ))}
      </div>
    )
  }
}

export default LinkList2
