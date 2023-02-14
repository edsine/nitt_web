import * as React from "react";

function LocationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
        strokeWidth={0}
        strokeMiterlimit={10}
        fill="none"
      >
        <path fill="#000" d="M0 -23.963500000000003L0 23.963500000000003" />
        <path
          d="M45 90a1.01 1.01 0 01-1.011-1.011V41.062a1.011 1.011 0 012.022 0v47.927A1.01 1.01 0 0145 90z"
          fill="#66676b"
        />
        <circle cx={45.001} cy={20.531} r={20.531} fill="#f23f38" />
        <circle cx={52.076} cy={13.456} r={5.056} fill="#ff9e9a" />
      </g>
    </svg>
  );
}

export default LocationIcon;
