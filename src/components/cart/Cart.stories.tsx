import type { Meta, StoryObj } from "@storybook/react-vite";

import Cart from ".";


const meta = {
  component: Cart,
} satisfies Meta<typeof Cart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cart: [],
    onDelete: () => {},
  },
};
export const One: Story = {
  args: {
    cart: [
      {
        id: 1,
        quantity: 3,
        name: "Fall Limited Edition Sneakers",
        price: 125,
        image: "images/image-product-1-thumbnail.jpg",
      },
    ],
    onDelete: () => {},
  },
};
export const Two: Story = {
  args: {
    cart: [
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
    ],
    onDelete: () => {},
  },
};
