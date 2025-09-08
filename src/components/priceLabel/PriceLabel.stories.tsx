import type { Meta, StoryObj } from "@storybook/react-vite";

import PriceLabel from ".";

const meta = {
  component: PriceLabel,
} satisfies Meta<typeof PriceLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    price: 250,
    discount: 0.5,
  },
};
