import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const HotelLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 6.827 6.827"
    {...props}
    width={40} height={40}
  >
    <Defs></Defs>
    <G id="Layer_x0020_1">
      <Path
        d="M1.636 1.593H5.19a.239.239 0 0 1 .239.239v3.902a.239.239 0 0 1-.24.24H1.637a.239.239 0 0 1-.24-.24V1.832a.239.239 0 0 1 .24-.24zm3.555.213H1.636a.026.026 0 0 0-.018.008.026.026 0 0 0-.008.018v3.902c0 .007.003.014.008.018a.026.026 0 0 0 .018.008h3.555a.026.026 0 0 0 .018-.008.026.026 0 0 0 .008-.018V1.832a.026.026 0 0 0-.008-.018.026.026 0 0 0-.018-.008z"
        className="fil0"
      />
      <Path
        d="M2.639.853h1.655v.908H2.532V.853h.107zm1.442.214H2.746v.48H4.08v-.48zm-1.767 1.06H4.62V3.15H2.207V2.127h.107zm2.092.213H2.42v.597h1.986V2.34z"
        className="fil0"
      />
      <Path
        d="M2.198 3.489h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.546 0h.243v.243h-.243zm-2.187.475h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.546 0h.243v.243h-.243zm-2.187.475h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.546 0h.243v.243h-.243zm-2.187.475h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.547 0h.243v.243h-.243zm.546 0h.243v.243h-.243z"
        style={{
          fill: "#212121",
        }}
      />
      <Path d="M2.487 5.368H4.34v.213H2.487z" className="fil0" />
    </G>
    <Path
      d="M0 0h6.827v6.827H0z"
      style={{
        fill: "none",
      }}
    />
  </Svg>
)
export default HotelLogo
