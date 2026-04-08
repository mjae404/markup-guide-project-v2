import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Select from "@/app/components/common/Select";

const sampleOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const meta = {
  title: "Component/Select",
  component: Select,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "프레임워크",
    options: sampleOptions,
    placeholder: "프레임워크를 선택해 주세요",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("프레임워크");
    await expect(label).toBeInTheDocument();
    await userEvent.click(label);
    const select = canvas.getByRole("combobox");
    await expect(select).toHaveFocus();
  },
};

export const WithValue: Story = {
  args: {
    label: "프레임워크",
    options: sampleOptions,
    value: "react",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await expect(select).toHaveValue("react");
  },
};

export const Disabled: Story = {
  args: {
    label: "프레임워크",
    options: sampleOptions,
    value: "vue",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await expect(select).toBeDisabled();
  },
};

export const Interactive: Story = {
  args: {
    label: "하나를 선택해 주세요",
    options: sampleOptions,
    placeholder: "선택...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    await userEvent.selectOptions(select, "svelte");
    await expect(select).toHaveValue("svelte");
  },
};
