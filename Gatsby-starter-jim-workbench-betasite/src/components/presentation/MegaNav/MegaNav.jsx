/** @jsx jsx */
import { jsx, Grid, Box, Styled, Text } from "theme-ui"
import Icon from "../../base/Icon"
import React from "react"
import PropTypes from "prop-types"
import Link from "../../navigation/MegaNavLink"

const MegaNav = (props) => (
  <Box
    sx={{
      width: ["100%", "83%"],
      backgroundColor: "muted",
      borderRadius: 6,
    }}
  >
    <Grid gap={0} columns={[1, "1.618fr 1.618fr"]}>
      <Box
        p={4}
        {...props}
        sx={{
          borderRight: "solid .025em #e8e8e8",
        }}
      >
        <Styled.h3>Left Box</Styled.h3>
        <Text>
          Excepteur et occaecat nisi dolore culpa. Aliqua nulla cupidatat
          eiusmod nisi Lorem. Irure sint ullamco officia aliquip ea incididunt
          Lorem nulla ut aliquip amet nulla aliquip labore.
        </Text>
        <Link
          sx={{
            my: 4,
          }}
        >
          nisi dolore culpa{" "}
          <Icon
            iconName="ArrowRight"
            sx={{
              variant: "layout.mainNavArrow",
            }}
          />
        </Link>
      </Box>
      <Box>
        <div>
          <Grid gap={1} columns={[1, 2]}>
            <Box
              p={4}
              {...props}
              sx={{
                borderRight: "solid .025em #e8e8e8",
              }}
            >
              <Styled.h3>Features</Styled.h3>
              <Link>Eiusmod Uni</Link>
              <Link>adipi sicing</Link>
              <Link>excepteur</Link>
              <Link>par irure</Link>
              <Link>laborum</Link>
              <Link>irure adipis</Link>
              <Link>ipsum nulla</Link>
            </Box>
            <Box p={4}>
              <Styled.h3>Technologies</Styled.h3>
              <Link>Eiusmod Uni</Link>
              <Link>adipi sicing</Link>
              <Link>excepteur</Link>
              <Link>par irure</Link>
              <Link>laborum</Link>
              <Link>irure adipis</Link>
              <Link>ipsum nulla</Link>
            </Box>
          </Grid>
        </div>
      </Box>
    </Grid>
  </Box>
)

MegaNav.propTypes = {}

MegaNav.defaultProps = {}

export default MegaNav
