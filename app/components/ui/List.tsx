import React from "react";
import styles from "@/app/styles/components/ui/List.module.scss";

interface ListProps {
  children: React.ReactNode;
}

type ElementWithProps = React.ReactElement<{ className?: string; children?: React.ReactNode }>;

function addClassName(element: ElementWithProps, className: string): React.ReactElement {
  return React.cloneElement(element, {
    className: `${className} ${element.props.className || ""}`.trim(),
  });
}

export function UnorderedList({ children }: ListProps) {
  return (
    <ul className={styles["unordered-list"]}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "li") {
          return addClassName(child as ElementWithProps, styles["list-item"]);
        }
        return child;
      })}
    </ul>
  );
}

export function OrderedList({ children }: ListProps) {
  return (
    <ol className={styles["ordered-list"]}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "li") {
          return addClassName(child as ElementWithProps, styles["list-item"]);
        }
        return child;
      })}
    </ol>
  );
}

interface GuidelineItemProps {
  title: string;
  children: React.ReactNode;
}

export function GuidelineList({ children }: ListProps) {
  return <ol className={styles["guideline-list"]}>{children}</ol>;
}

export function GuidelineItem({ title, children }: GuidelineItemProps) {
  return (
    <li className={styles["guideline-item"]}>
      <strong className={styles["guideline-title"]}>{title}</strong>
      <div className={styles["guideline-body"]}>{children}</div>
    </li>
  );
}

export function DescriptionList({ children }: ListProps) {
  return (
    <dl className={styles["description-list"]}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const el = child as ElementWithProps;

        if (el.type === "div") {
          return (
            <div className={styles["desc-group"]}>
              {React.Children.map(el.props.children, (inner) => {
                if (!React.isValidElement(inner)) return inner;
                const innerEl = inner as ElementWithProps;
                if (innerEl.type === "dt") return addClassName(innerEl, styles["desc-term"]);
                if (innerEl.type === "dd") return addClassName(innerEl, styles["desc-detail"]);
                return inner;
              })}
            </div>
          );
        }
        if (el.type === "dt") return addClassName(el, styles["desc-term"]);
        if (el.type === "dd") return addClassName(el, styles["desc-detail"]);
        return child;
      })}
    </dl>
  );
}
