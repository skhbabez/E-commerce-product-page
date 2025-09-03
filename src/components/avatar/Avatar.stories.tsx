import type { Meta, StoryObj } from "@storybook/react-vite";

import Avatar from ".";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    alt: "User Avatar",
    src: "public/images/image-avatar.png",
  },
};
export const container: Story = {
  args: {
    alt: "User Avatar",
    src: "public/images/image-avatar.png",
  },
  render: function Render(args) {
    return (
      <div style={{ containerType: "inline-size", inlineSize: "100%" }}>
        <Avatar {...args}></Avatar>{" "}
      </div>
    );
  },
};
