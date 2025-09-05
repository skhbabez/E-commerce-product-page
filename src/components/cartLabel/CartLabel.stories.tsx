import type { Meta, StoryObj } from "@storybook/react-vite";

import CartLabel from ".";

const meta = {
  component: CartLabel,
} satisfies Meta<typeof CartLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: 3,
  },
};
