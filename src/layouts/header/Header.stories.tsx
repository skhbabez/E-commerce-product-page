import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from ".";
import { UserCtxProvider } from "../../context/userContext";
import { CartCtxProvider } from "../../context/cartContext";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <UserCtxProvider>
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
        </UserCtxProvider>
      );
    },
  ],
};
