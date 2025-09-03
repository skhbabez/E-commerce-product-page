import type { Meta, StoryObj } from "@storybook/react-vite";

import ImageLink from ".";
import Avatar from "../avatar";

const meta = {
  component: ImageLink,
} satisfies Meta<typeof ImageLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    href: "#",
    children: (
      <Avatar alt="User Avatar" src="public/images/image-avatar.png"></Avatar>
    ),
  },
};

export const container: Story = {
  args: {
    href: "#",
    children: (
      <Avatar alt="User Avatar" src="public/images/image-avatar.png"></Avatar>
    ),
  },
  render: function Render(args) {
    return (
      <div style={{ containerType: "inline-size", inlineSize: "100%" }}>
        <ImageLink {...args}></ImageLink>{" "}
      </div>
    );
  },
};
