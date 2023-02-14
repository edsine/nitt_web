import * as React from "react";

function PicIcon(props) {
  return (
    <svg
      width="96px"
      height="96px"
      viewBox="0 0 96 96"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <image
          width={96}
          height={96}
          //   xlinkHref="data:image/png;base64,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"
          id="a"
        />
      </defs>
      <use xlinkHref="#a" fill="#FFF" />
    </svg>
  );
}

export default PicIcon;
