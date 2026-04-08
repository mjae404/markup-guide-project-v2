import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Progress from "@/app/components/common/Progress";

const meta = {
  title: "Component/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    size: "md",
    showLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progressbar = canvas.getByRole("progressbar");
    await expect(progressbar).toBeInTheDocument();
    await expect(progressbar).toHaveAttribute("aria-valuenow", "60");
    await expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    await expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    size: "md",
    showLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("75%")).toBeInTheDocument();
  },
};

export const SmallSize: Story = {
  args: {
    value: 40,
    size: "sm",
    showLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("40%")).toBeInTheDocument();
  },
};

export const LargeSize: Story = {
  args: {
    value: 90,
    size: "lg",
    showLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("90%")).toBeInTheDocument();
  },
};

export const CustomColor: Story = {
  args: {
    value: 50,
    size: "md",
    showLabel: true,
    color: "#e11d48",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("50%")).toBeInTheDocument();
  },
};

export const ZeroValue: Story = {
  args: {
    value: 0,
    size: "md",
    showLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("0%")).toBeInTheDocument();
    const progressbar = canvas.getByRole("progressbar");
    await expect(progressbar).toHaveAttribute("aria-valuenow", "0");
  },
};

export const FullValue: Story = {
  args: {
    value: 100,
    size: "md",
    showLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("100%")).toBeInTheDocument();
    const progressbar = canvas.getByRole("progressbar");
    await expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  },
};
