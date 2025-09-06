import type { Meta, StoryObj } from "@storybook/react-vite";

import ProductPage from ".";
import { CartCtxProvider } from "../../context/cartContext";

const meta = {
  component: ProductPage,
} satisfies Meta<typeof ProductPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    product: {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      brand: "Sneaker Company",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 250,
      discount: 0.5,
      images: [
        {
          id: 1,
          image: "images/image-product-1.jpg",
          thumbnail: "images/image-product-1-thumbnail.jpg",
          alt: "Product picture",
        },
        {
          id: 2,
          image: "images/image-product-2.jpg",
          thumbnail: "images/image-product-2-thumbnail.jpg",
          alt: "Product picture",
        },
        {
          id: 3,
          image: "images/image-product-3.jpg",
          thumbnail: "images/image-product-3-thumbnail.jpg",
          alt: "Product picture",
        },
        {
          id: 4,
          image: "images/image-product-4.jpg",
          thumbnail: "images/image-product-4-thumbnail.jpg",
          alt: "Product picture",
        },
      ],
    },
  },
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
