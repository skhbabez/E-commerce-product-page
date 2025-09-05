import type { Meta, StoryObj } from "@storybook/react-vite";

import GalleryNavigation from ".";

const meta = {
  component: GalleryNavigation,
} satisfies Meta<typeof GalleryNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    onNextClick: () => {},
    onPrevClick: () => {},
  },
};
