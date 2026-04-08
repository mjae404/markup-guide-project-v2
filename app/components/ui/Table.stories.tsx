import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import Table, { TableEm } from "@/app/components/ui/Table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    variant: "vertical",
    children: (
      <>
        <thead>
          <tr>
            <th>요소</th>
            <th>설명</th>
            <th>사용 예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt;header&gt;</td>
            <td>문서 또는 섹션의 헤더</td>
            <td>사이트 로고, 네비게이션</td>
          </tr>
          <tr>
            <td>&lt;nav&gt;</td>
            <td>네비게이션 링크 그룹</td>
            <td>GNB, LNB</td>
          </tr>
          <tr>
            <td>&lt;main&gt;</td>
            <td>문서의 주요 콘텐츠</td>
            <td>페이지당 하나만 사용</td>
          </tr>
        </tbody>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("요소")).toBeInTheDocument();
    await expect(canvas.getByText("설명")).toBeInTheDocument();
  },
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    children: (
      <>
        <thead>
          <tr>
            <th>분류</th>
            <th>항목</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>기술 스펙</th>
            <td>HTML5 / CSS3</td>
            <td>W3C 웹 표준 준수</td>
          </tr>
          <tr>
            <th>인코딩</th>
            <td>UTF-8</td>
            <td>유니코드 인코딩</td>
          </tr>
        </tbody>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("기술 스펙")).toBeInTheDocument();
  },
};

export const WithCaption: Story = {
  args: {
    caption: "시맨틱 요소 목록",
    children: (
      <>
        <thead>
          <tr>
            <th>요소</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt;article&gt;</td>
            <td>독립적인 콘텐츠</td>
          </tr>
        </tbody>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("시맨틱 요소 목록")).toBeInTheDocument();
  },
};

export const WithTableEm: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>분류</th>
            <th>파일명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>스타일</td>
            <td>
              <TableEm>_variable.scss</TableEm>
              <TableEm>_mixin.scss</TableEm>
            </td>
          </tr>
        </tbody>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("_variable.scss")).toBeInTheDocument();
    await expect(canvas.getByText("_mixin.scss")).toBeInTheDocument();
  },
};
