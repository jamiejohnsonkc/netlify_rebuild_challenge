/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../base/Icon"
import { color } from "../../../../../jim-workbench-custom-themes/colors"
import { transparentize } from "@theme-ui/color"

const DataIcon = (props) => (
  <Icon
    {...props}
    name={props.iconName}
    size="1.25em"
    sx={{
      color: color.teal,
      verticalAlign: "middle",
    }}
  />
)

const Table = (props) => (
  <table
    class="table"
    {...props}
    sx={{
      borderCollapse: "collapse",
      display: ["block", "block", "table", "table"],
      maxWidth: "100%",
      overflowX: "auto",
      tableLayout: ["fixed", "fixed", "auto", "auto"],
      width: "100%",
      margin: "1em auto",
    }}
  />
)

const THead = (props) => <thead>{props.children}</thead>
const TBody = (props) => <tbody>{props.children}</tbody>
const TRow = (props) => (
  <tr
    {...props}
    sx={{
      textAlign: "left",
    }}
  >
    {props.children}
  </tr>
)
const ThCol = ({ textAlign, ...props }) => (
  <th
    scope="col"
    {...props}
    sx={{
      textAlign,
      fontSize: 3,
      minWidth: ["11em", "11em", "unset", "unset"],
    }}
  >
    {props.content}
  </th>
)
const ThRow = (props) => (
  <th
    scope="row"
    {...props}
    sx={{
      color: `${color.gray3}`,
      fontWeight: 400,
      py: 2,
    }}
  >
    {props.content}
  </th>
)
const TdataText = (props) => (
  <td
    {...props}
    sx={{
      textAlign: "center",
      color: `${color.gray1}`,
      fontWeight: 400,
    }}
  >
    {props.content}
  </td>
)
const TdataCheckYes = ({ backgroundColor, ...props }) => (
  <td
    {...props}
    sx={{
      backgroundColor,
      textAlign: "center",
    }}
  >
    <DataIcon
      {...props}
      iconName="Check"
      sx={{
        backgroundColor: "transparent",
      }}
    />
  </td>
)
const TdataCheckNo = (props) => (
  <td
    {...props}
    sx={{
      textAlign: "center",
    }}
  >
    <DataIcon
      {...props}
      iconName="CheckNo"
      sx={{
        color: `${color.gray3}`,
        backgroundColor: "transparent",
      }}
    />
  </td>
)

const ComparisonTable = (props) => (
  <>
    {" "}
    <Table>
      <THead>
        <TRow>
          <ThCol
            {...props}
            content="Comparison Point"
            sx={{
              th: {
                textAlign: "left",
              },
            }}
          />
          <ThCol
            {...props}
            content="CDN"
            sx={{
              textAlign: "center",
            }}
          />
          <ThCol
            content="Netlify Edge"
            sx={{
              textAlign: "center",
            }}
          />
        </TRow>
      </THead>
      <TBody>
        <TRow
          {...props}
          sx={{
            bg: transparentize(color.gray6, 0.35),
          }}
        >
          <ThRow content="Supports static assets" />
          <TdataCheckYes
            {...props}
            sx={{
              bg: transparentize(color.gray6, 0.35),
            }}
          />
          <TdataCheckYes />
        </TRow>
        <TRow>
          <ThRow content="Works without an origin" />
          <TdataCheckNo
            {...props}
            sx={{
              bg: transparentize(color.gray6, 0.65),
            }}
          />
          <TdataCheckYes />
        </TRow>
        <TRow
          sx={{
            bg: transparentize(color.gray6, 0.35),
          }}
        >
          <ThRow content="Can prerender pages / run builds" />
          <TdataCheckNo
            {...props}
            sx={{
              bg: transparentize(color.gray6, 0.35),
            }}
          />
          <TdataCheckYes />
        </TRow>
        <TRow>
          <ThRow content="Git-integrated CI/CD" />
          <TdataCheckNo
            {...props}
            sx={{
              bg: transparentize(color.gray6, 0.65),
            }}
          />
          <TdataCheckYes />
        </TRow>
        <TRow
          sx={{
            bg: transparentize(color.gray6, 0.35),
          }}
        >
          <ThRow content="Deploys" />
          <TdataText
            {...props}
            content="Manual"
            sx={{
              bg: transparentize(color.gray6, 0.35),
            }}
          />
          <TdataText content="Automatic" />
        </TRow>
        <TRow>
          <ThRow content="Rollbacks" />
          <TdataText
            {...props}
            content="Manual"
            sx={{
              bg: transparentize(color.gray6, 0.65),
            }}
          />
          <TdataText content="Automatic" />
        </TRow>
        <TRow
          sx={{
            bg: transparentize(color.gray6, 0.35),
          }}
        >
          <ThRow content="Cache invalidation" />
          <TdataText
            {...props}
            content="Tricky (some risk of stale content)"
            sx={{
              bg: transparentize(color.gray6, 0.35),
            }}
          />
          <TdataText content="Instant (no risk of stale content)" />
        </TRow>
      </TBody>
    </Table>
  </>
)

ComparisonTable.propTypes = {}

ComparisonTable.defaultProps = {}

export default ComparisonTable
