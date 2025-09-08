import type { ComponentProps } from "react";

const LeftArrow = (props: ComponentProps<"svg">) => {
  return (
    <svg viewBox="0 0 12 18" {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default LeftArrow;
