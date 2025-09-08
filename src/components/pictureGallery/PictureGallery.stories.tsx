import type { Meta, StoryObj } from "@storybook/react-vite";

import PictureGallery from "./index";

const meta = {
  component: PictureGallery,
} satisfies Meta<typeof PictureGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
};
