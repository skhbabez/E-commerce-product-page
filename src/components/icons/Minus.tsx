import type { ComponentProps } from "react";

const Minus = (props: ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 4" {...props}>
      <path
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Minus;
