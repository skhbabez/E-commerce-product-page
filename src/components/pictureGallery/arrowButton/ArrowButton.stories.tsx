import type { Meta, StoryObj } from "@storybook/react-vite";

import ArrowButton from "./index";

const meta = {
  component: ArrowButton,
} satisfies Meta<typeof ArrowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const left: Story = {
  args: {
    variant: "left",
  },
};
export const right: Story = {
  args: {
    variant: "right",
  },
};
