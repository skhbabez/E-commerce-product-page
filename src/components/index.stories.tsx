import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./index";
import ShoppingCart from "./icons/ShoppingCart";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
export const Cart: Story = {
  args: {
    children: (
      <>
        <ShoppingCart />
        Add to cart
      </>
    ),
  },
};
