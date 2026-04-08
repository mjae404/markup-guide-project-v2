import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Radio from "@/app/components/common/Radio";

const meta = {
  title: "Component/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    label: "옵션 A",
    name: "demo",
    value: "a",
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("옵션 A")).toBeInTheDocument();
    const radio = canvas.getByRole("radio");
    await expect(radio).not.toBeChecked();
  },
};

export const Selected: Story = {
  args: {
    label: "옵션 B",
    name: "demo",
    value: "b",
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    await expect(radio).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 옵션",
    name: "demo",
    value: "c",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    await expect(radio).toBeDisabled();
  },
};

export const Interactive = {
  render: () => {
    const [selected, setSelected] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Radio
          label="옵션 1"
          name="interactive"
          value="1"
          checked={selected === "1"}
          onChange={setSelected}
        />
        <Radio
          label="옵션 2"
          name="interactive"
          value="2"
          checked={selected === "2"}
          onChange={setSelected}
        />
        <Radio
          label="옵션 3"
          name="interactive"
          value="3"
          checked={selected === "3"}
          onChange={setSelected}
        />
      </div>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole("radio");
    await expect(radios).toHaveLength(3);
    await userEvent.click(canvas.getByText("옵션 1"));
    await expect(radios[0]).toBeChecked();
    await userEvent.click(canvas.getByText("옵션 2"));
    await expect(radios[1]).toBeChecked();
    await expect(radios[0]).not.toBeChecked();
  },
};
