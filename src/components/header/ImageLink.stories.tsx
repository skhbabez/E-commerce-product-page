import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from ".";
import Avatar from "../avatar";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
