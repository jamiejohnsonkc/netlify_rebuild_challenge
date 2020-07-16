import React from "react"
import useHover from "./use-hover"

const [hoverRef, isHovered] = useHover()

const Hover = () => (
  <div
    ref={hoverRef}
    style={{
      color: "white",
      padding: "8rem",
      width: "12rem",
      textAlign: "center",
      fontSize: "5rem",
      backgroundColor: isHovered ? "#00e3e3" : "#ccc",
    }}
  >
    {isHovered ? "😁" : "☹️"}
  </div>
)

export default Hover
