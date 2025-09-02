import type { Meta, StoryObj } from "@storybook/react-vite";

import SpinButton from ".";
import { useArgs } from "storybook/internal/preview-api";

const meta = {
  component: SpinButton,
} satisfies Meta<typeof SpinButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: 0,
    onClick: () => {},
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const onClick = (newValue: number) => {
      updateArgs({ value: newValue });
    };
    return <SpinButton value={value} onClick={onClick}></SpinButton>;
  },
};
