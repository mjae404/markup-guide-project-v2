import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Spinner from "@/app/components/common/Spinner";

const meta = {
  title: "Component/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole("status");
    await expect(spinner).toBeInTheDocument();
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole("status");
    await expect(spinner).toBeInTheDocument();
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole("status");
    await expect(spinner).toBeInTheDocument();
  },
};

export const CustomColor: Story = {
  args: {
    size: "md",
    color: "#dc2626",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole("status");
    await expect(spinner).toBeInTheDocument();
    await expect(spinner).toHaveStyle("--spinner-color: #dc2626");
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const spinners = canvas.getAllByRole("status");
    await expect(spinners).toHaveLength(3);
  },
};
