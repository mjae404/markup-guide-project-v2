import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import CodeBlock, { CodeInline, ExampleBlock } from "@/app/components/ui/CodeBlock";

const meta = {
  title: "UI/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `<div class="container">\n  <h1>Hello World</h1>\n</div>`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Hello World/)).toBeInTheDocument();
  },
};

export const WithLanguage: Story = {
  args: {
    language: "HTML",
    children: `<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n  </head>\n</html>`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("HTML")).toBeInTheDocument();
  },
};

export const Inline = {
  render: () => (
    <p>
      클래스명은 <CodeInline>kebab-case</CodeInline>를 사용합니다.
    </p>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("kebab-case")).toBeInTheDocument();
  },
};

export const GoodExample = {
  render: () => (
    <ExampleBlock type="good">
      {`.card-title {\n  font-size: 18px;\n}`}
    </ExampleBlock>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("올바른 예시")).toBeInTheDocument();
  },
};

export const BadExample = {
  render: () => (
    <ExampleBlock type="bad">
      {`div > ul > li > a {\n  font-size: 18px;\n}`}
    </ExampleBlock>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("잘못된 예시")).toBeInTheDocument();
  },
};
