/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
const modes = ["light", "inverse", "dark", "purple", "gray", "blue"]
export default (props) => {
  const [mode, setMode] = useColorMode()
  return (
    <button
      {...props}
      onClick={(e) => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    />
  )
}
