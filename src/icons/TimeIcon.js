import * as React from "react";

function TimeIcon(props) {
  return (
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.025 1.5c-4.135 0-7.5 3.364-7.5 7.5s3.365 7.5 7.5 7.5c4.136 0 7.5-3.364 7.5-7.5s-3.364-7.5-7.5-7.5zm0 13.5c-3.308 0-6-2.692-6-6s2.692-6 6-6c3.309 0 6 2.692 6 6s-2.691 6-6 6z"
        fill="currentColor"
      />
      <path
        d="M9.775 5.25h-1.5v4.06l2.47 2.47 1.06-1.06-2.03-2.03V5.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TimeIcon;
