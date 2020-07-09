/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      variant: "links.nav",

      //   "&.active": {
      //     color: "accent",
      //   },
    }}
  />
)

{
  /* <Styled.h2 as="div">Hello!</Styled.h2>

This can also be used to style components like the Gatsby Link component to match other links.

<Styled.a as={Link} to="/about">
  About
</Styled.a> */
}
