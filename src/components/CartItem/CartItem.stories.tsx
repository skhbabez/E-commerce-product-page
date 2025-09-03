import type { Meta, StoryObj } from "@storybook/react-vite";

import CartItem from ".";

const meta = {
  component: CartItem,
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: 1,
    imageUrl: "public/images/image-product-1-thumbnail.jpg",
    imageAlt: "Sneakers",
    productName: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
    onDelete: (id) => {},
  },
};
