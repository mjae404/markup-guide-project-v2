import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import Input from "@/app/components/common/Input";

const meta = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력해 주세요",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("이름");
    await expect(label).toBeInTheDocument();
    await userEvent.click(label);
    const input = canvas.getByPlaceholderText("이름을 입력해 주세요");
    await expect(input).toHaveFocus();
    await userEvent.type(input, "김민지");
  },
};

export const WithValue: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해 주세요",
    value: "user@example.com",
    type: "email",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("user@example.com");
    await expect(input).toBeInTheDocument();
  },
};

export const WithError: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해 주세요",
    value: "invalid",
    error: "올바른 이메일 주소를 입력해 주세요",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("올바른 이메일 주소를 입력해 주세요")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화된 필드",
    placeholder: "입력할 수 없습니다",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("입력할 수 없습니다");
    await expect(input).toBeDisabled();
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해 주세요",
    type: "password",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("비밀번호를 입력해 주세요");
    await expect(input).toHaveAttribute("type", "password");
    await userEvent.type(input, "secret123");
  },
};
