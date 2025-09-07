import type { ComponentProps } from "react";

const Menu = (props: ComponentProps<"svg">) => {
  return (
    <svg viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Menu;
