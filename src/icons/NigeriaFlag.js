import * as React from "react";

function NigerianFlag(props) {
  return (
    <svg
      width={28}
      height={20}
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.25}
        y={0.25}
        width={27.5}
        height={19.5}
        rx={1.75}
        fill="#fff"
        stroke="#F5F5F5"
        strokeWidth={0.5}
      />
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={20}
      >
        <rect
          x={0.25}
          y={0.25}
          width={27.5}
          height={19.5}
          rx={1.75}
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.5}
        />
      </mask>
      <g mask="url(#a)" fill="#189B62">
        <path d="M18.6667 0H28.00003V20H18.6667z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 20h9.333V0H0v20z" />
      </g>
    </svg>
  );
}

export default NigerianFlag;
