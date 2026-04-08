import type { Meta } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { UnorderedList, OrderedList, DescriptionList } from "@/app/components/ui/List";

const meta = {
  title: "UI/List",
  component: UnorderedList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UnorderedList>;

export default meta;

export const Unordered = {
  render: () => (
    <UnorderedList>
      <li>모든 태그는 소문자로 작성합니다.</li>
      <li>속성값은 큰따옴표로 감싸줍니다.</li>
      <li>들여쓰기는 2칸 스페이스를 사용합니다.</li>
    </UnorderedList>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/소문자/)).toBeInTheDocument();
    const items = canvasElement.querySelectorAll("li");
    await expect(items.length).toBe(3);
  },
};

export const Ordered = {
  render: () => (
    <OrderedList>
      <li>스토리보드 검토</li>
      <li>웹 리소스 구조화</li>
      <li>시안 검토</li>
      <li>퍼블리싱</li>
      <li>산출물 최종 확인</li>
    </OrderedList>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const items = canvasElement.querySelectorAll("li");
    await expect(items.length).toBe(5);
  },
};

export const Description = {
  render: () => (
    <DescriptionList>
      <dt>인식의 용이성</dt>
      <dd>모든 콘텐츠는 사용자가 인식할 수 있어야 합니다</dd>
      <dt>운용의 용이성</dt>
      <dd>사용자 인터페이스는 조작 가능해야 합니다</dd>
    </DescriptionList>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("인식의 용이성")).toBeInTheDocument();
    await expect(canvas.getByText("운용의 용이성")).toBeInTheDocument();
  },
};
