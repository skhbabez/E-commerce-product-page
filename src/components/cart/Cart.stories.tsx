import type { Meta, StoryObj } from "@storybook/react-vite";

import Cart from ".";

const meta = {
  component: Cart,
} satisfies Meta<typeof Cart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
