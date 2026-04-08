import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import DataTable from "@/app/components/common/DataTable";

const sampleColumns = [
  { key: "name", label: "이름" },
  { key: "role", label: "역할" },
  { key: "status", label: "상태" },
];

const sampleData = [
  { name: "김민지", role: "프론트엔드", status: "활성" },
  { name: "이수현", role: "백엔드", status: "활성" },
  { name: "박지영", role: "디자이너", status: "비활성" },
  { name: "최동훈", role: "PM", status: "활성" },
  { name: "정하은", role: "QA", status: "활성" },
];

const meta = {
  title: "Component/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("이름")).toBeInTheDocument();
    await expect(canvas.getByText("역할")).toBeInTheDocument();
    await expect(canvas.getByText("김민지")).toBeInTheDocument();
  },
};

export const Striped: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    striped: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("이수현")).toBeInTheDocument();
    await expect(canvas.getByText("박지영")).toBeInTheDocument();
  },
};

export const Hoverable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    hoverable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("최동훈")).toBeInTheDocument();
  },
};

export const StripedAndHoverable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    striped: true,
    hoverable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("정하은")).toBeInTheDocument();
    await expect(canvas.getByText("QA")).toBeInTheDocument();
  },
};

export const TwoColumns: Story = {
  args: {
    columns: [
      { key: "tag", label: "태그" },
      { key: "desc", label: "설명" },
    ],
    data: [
      { tag: "<header>", desc: "문서 헤더 영역" },
      { tag: "<main>", desc: "주요 콘텐츠 영역" },
      { tag: "<footer>", desc: "문서 푸터 영역" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("태그")).toBeInTheDocument();
    await expect(canvas.getByText("<header>")).toBeInTheDocument();
    await expect(canvas.getByText("<footer>")).toBeInTheDocument();
  },
};

export const EmptyData: Story = {
  args: {
    columns: sampleColumns,
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("이름")).toBeInTheDocument();
    await expect(canvas.getByText("역할")).toBeInTheDocument();
  },
};
