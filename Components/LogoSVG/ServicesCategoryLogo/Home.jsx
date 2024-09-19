import * as React from "react"
import Svg, { Path } from "react-native-svg";

const HomeSVGIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    {...props}
    width={40} height={40}
  >
    <Path
      d="M43.143 35.699c3.695.953 6.428 4.31 6.428 8.301H50c1.591 0 3.117.632 4.243 1.757A6.005 6.005 0 0 1 56 49.963V50a6 6 0 0 1-6 6H32a6.073 6.073 0 0 1-1.959-.327 6.015 6.015 0 0 1-3.702-3.679A6.07 6.07 0 0 1 26 50v-.039a5.987 5.987 0 0 1 1.757-4.204M47 37.881V31.5"
      style={{
        fill: "none",
        stroke: "#222a33",
        strokeWidth: "1.5px",
      }}
    />
    <Path
      d="M36.171 45.786a4.117 4.117 0 0 1 4.115-4.115M33.086 45.786c0-3.974 3.226-7.2 7.2-7.2"
      style={{
        fill: "none",
        stroke: "#222a33",
        strokeWidth: "1.5px",
      }}
    />
    <Path
      d="M30 45.786C30 40.109 34.609 35.5 40.286 35.5"
      style={{
        fill: "none",
        stroke: "#222a33",
        strokeWidth: "1.5px",
      }}
    />
    <Path
      d="M51 37V20.407a2.55 2.55 0 0 0-1.19-2.158L33.545 7.976a2.894 2.894 0 0 0-3.09 0L14.19 18.249A2.55 2.55 0 0 0 13 20.407v27.04A2.552 2.552 0 0 0 15.553 50H26M26.5 10.474l-16 10.105M37.5 10.474l16 10.105"
      style={{
        fill: "none",
        stroke: "#222a33",
        strokeWidth: "1.5px",
      }}
    />
    <Path
      d="M36 20.5a4 4 0 0 0-8 0V25h8v-4.5ZM26 25h12M47 28v-2M36.243 36.257A6.003 6.003 0 0 0 32 34.5s0 0 0 0a6.003 6.003 0 0 0-4.243 1.757A6.003 6.003 0 0 0 26 40.5V43"
      style={{
        fill: "none",
        stroke: "#222a33",
        strokeWidth: "1.5px",
      }}
    />
  </Svg>
)
export default HomeSVGIcon
