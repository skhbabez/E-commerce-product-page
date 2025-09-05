import type { ComponentProps } from "react";

const RightArrow = (props: ComponentProps<"svg">) => {
  return (
    <svg viewBox="0 0 13 18" {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default RightArrow;
