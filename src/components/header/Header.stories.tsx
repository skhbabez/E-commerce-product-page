import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from ".";
import { UserCtxProvider } from "../../context/userContext";

const meta = {
  component: Header,
  decorators: [
    (Story) => {
      return (
        <UserCtxProvider>
          <Story></Story>
        </UserCtxProvider>
      );
    },
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
