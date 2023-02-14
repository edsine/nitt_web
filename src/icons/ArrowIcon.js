import * as React from "react";

function ArrowIcon(props) {
  return (
    <svg
      width={9}
      height={18}
      viewBox="0 0 9 18"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="a" fill="#fff">
        <path d="M.91 17.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L6.9 9.87c.48-.48.48-1.26 0-1.74L.38 1.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z" />
      </mask>
      <path
        d="M.91 17.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L6.9 9.87c.48-.48.48-1.26 0-1.74L.38 1.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z"
        fill="current"
      />
      <path
        d="M.38 16.39l-3.536-3.536L.38 16.39zM6.9 9.87l3.535 3.535L6.9 9.87zm0-1.74l-3.536 3.535L6.9 8.13zM.38 1.61l3.536-3.536L.38 1.61zM1.44.55l-3.536 3.535L1.44.55zm6.52 6.52l3.535-3.536L7.96 7.07zm0 3.86L4.459 7.36l-.017.017-.018.017L7.96 10.93zm-6.52 6.52l3.412 3.655.063-.059.06-.06-3.535-3.537zm-.53-4.78c1.064 0 2.168.407 3.006 1.244l-7.072 7.071A5.742 5.742 0 00.91 22.67v-10zm3.006 1.244a4.246 4.246 0 010 6.011l-7.072-7.071a5.754 5.754 0 000 8.131l7.072-7.071zm0 6.011l6.52-6.52-7.072-7.071-6.52 6.52 7.072 7.071zm6.52-6.52a6.231 6.231 0 000-8.811l-7.072 7.071a3.769 3.769 0 010-5.331l7.071 7.071zm0-8.811l-6.52-6.52-7.072 7.071 6.52 6.52 7.071-7.071zm-6.52-6.52a4.246 4.246 0 010 6.011l-7.072-7.071a5.754 5.754 0 000 8.131l7.072-7.071zm0 6.011a4.246 4.246 0 01-6.012 0l7.072-7.071a5.754 5.754 0 00-8.132 0l7.072 7.071zm-6.012 0l6.52 6.52 7.071-7.071-6.52-6.52-7.07 7.071zm6.52 6.52A2.276 2.276 0 013.76 9h10a7.724 7.724 0 00-2.264-5.466l-7.072 7.071zM3.76 9c0-.566.227-1.177.699-1.64l7.002 7.14A7.682 7.682 0 0013.76 9h-10zm.664-1.606l-6.52 6.52 7.072 7.071 6.52-6.52-7.072-7.071zm-6.396 6.4A4.216 4.216 0 01.91 12.67v10c1.592 0 2.97-.657 3.942-1.564l-6.824-7.31z"
        fill="none"
        mask="url(#a)"
      />
    </svg>
  );
}

export default ArrowIcon;