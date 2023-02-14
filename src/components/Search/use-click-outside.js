import { useEffect } from "react";

const events = [`mousedown`, `touchstart`];

export default (ref, onClickOutside) => {
  const isOutside = (element) => !ref.current || !ref.current.contains(element);

  const onClick = (event) => {
    if (isOutside(event.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    for (const event of events) {
      if (document !== "undefined") {
        document.addEventListener(event, onClick);
      }
    }

    return () => {
      if (document !== "undefined") {
        for (const event of events)
          document.removeEventListener(event, onClick);
      }
    };
  });
};
