import * as React from "react";

function ArrowRightIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.34 10.53l-4.29 4.29c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.01-3.01H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.19l-3.01-3.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.29 4.29a.75.75 0 010 1.06z"
        fill="#27AE60"
      />
    </svg>
  );
}

export default ArrowRightIcon;
