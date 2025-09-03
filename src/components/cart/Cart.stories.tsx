import type { Meta, StoryObj } from "@storybook/react-vite";

import Cart from ".";
import { CartCtxProvider } from "../../context/cartContext";

const meta = {
  component: Cart,
} satisfies Meta<typeof Cart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <CartCtxProvider initialValue={[]}>
          <Story></Story>
        </CartCtxProvider>
      );
    },
  ],
};
export const One: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <CartCtxProvider
          initialValue={[
            {
              id: 1,
              quantity: 3,
              name: "Fall Limited Edition Sneakers",
              price: 125,
              image: "images/image-product-1-thumbnail.jpg",
            },
          ]}
        >
          <Story></Story>
        </CartCtxProvider>
      );
    },
  ],
};
export const Two: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <CartCtxProvider
          initialValue={[
            {
              id: 1,
              quantity: 3,
              name: "Fall Limited Edition Sneakers",
              price: 125,
              image: "images/image-product-1-thumbnail.jpg",
            },
            {
              id: 2,
              quantity: 2,
              name: "Summer Limited Edition Sneakers",
              price: 150,
              image: "images/image-product-2-thumbnail.jpg",
            },
          ]}
        >
          <Story></Story>
        </CartCtxProvider>
      );
    },
  ],
};
