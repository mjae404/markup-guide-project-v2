import type { Meta } from "@storybook/nextjs-vite";
import { expect, within, userEvent } from "storybook/test";
import { useState } from "react";
import Pagination from "@/app/components/common/Pagination";

const meta = {
  title: "Component/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

export const Default = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Previous page")).toBeDisabled();
    await expect(canvas.getByLabelText("Next page")).not.toBeDisabled();
  },
};

export const MiddlePage = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("5")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByText("10")).toBeInTheDocument();
  },
};

export const LastPage = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText("Next page")).toBeDisabled();
    await expect(canvas.getByLabelText("Previous page")).not.toBeDisabled();
  },
};

export const FewPages = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByText("2")).toBeInTheDocument();
    await expect(canvas.getByText("3")).toBeInTheDocument();
  },
};

export const ClickNavigation = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const nextButton = canvas.getByLabelText("Next page");
    await userEvent.click(nextButton);
    await expect(canvas.getByText("2")).toBeInTheDocument();
  },
};
