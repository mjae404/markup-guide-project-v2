import React from "react";
import styles from "@/app/styles/components/ui/Table.module.scss";

interface TableProps {
  children: React.ReactNode;
  variant?: "vertical" | "horizontal";
  caption?: string;
}

function applyClassToElements(children: React.ReactNode, isHorizontal: boolean): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const elementChild = child as React.ReactElement<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }>;
    const tag = elementChild.type;

    if (tag === "thead" || tag === "tbody" || tag === "colgroup") {
      return React.cloneElement(elementChild, {}, applyClassToElements(elementChild.props.children, isHorizontal));
    }

    if (tag === "tr") {
      return React.cloneElement(elementChild, {
        className: `${styles["body-row"]} ${elementChild.props.className || ""}`.trim(),
      }, applyClassToElements(elementChild.props.children, isHorizontal));
    }

    if (tag === "th") {
      const isInTbody = false; // handled by context below
      return React.cloneElement(elementChild, {
        className: `${styles["head-cell"]} ${elementChild.props.className || ""}`.trim(),
      });
    }

    if (tag === "td") {
      return React.cloneElement(elementChild, {
        className: `${styles["body-cell"]} ${elementChild.props.className || ""}`.trim(),
      });
    }

    return child;
  });
}

function applyClassInTbody(children: React.ReactNode, isHorizontal: boolean): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const elementChild = child as React.ReactElement<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }>;
    const tag = elementChild.type;

    if (tag === "thead") {
      return React.cloneElement(elementChild, {}, applyClassInSection(elementChild.props.children, "head"));
    }

    if (tag === "tbody") {
      return React.cloneElement(elementChild, {}, applyClassInSection(elementChild.props.children, isHorizontal ? "body-horizontal" : "body"));
    }

    if (tag === "colgroup") {
      return child;
    }

    return child;
  });
}

function applyClassInSection(children: React.ReactNode, section: "head" | "body" | "body-horizontal"): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const elementChild = child as React.ReactElement<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }>;
    const tag = elementChild.type;

    if (tag === "tr") {
      const rowClass = section === "head" ? "" : styles["body-row"];
      return React.cloneElement(elementChild, {
        className: `${rowClass} ${elementChild.props.className || ""}`.trim(),
      }, applyClassInRow(elementChild.props.children, section));
    }

    return child;
  });
}

function applyClassInRow(children: React.ReactNode, section: "head" | "body" | "body-horizontal"): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const elementChild = child as React.ReactElement<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }>;
    const tag = elementChild.type;

    if (tag === "th") {
      const cls = section === "body-horizontal" ? styles["body-head-cell"] : styles["head-cell"];
      return React.cloneElement(elementChild, {
        className: `${cls} ${elementChild.props.className || ""}`.trim(),
      });
    }

    if (tag === "td") {
      return React.cloneElement(elementChild, {
        className: `${styles["body-cell"]} ${elementChild.props.className || ""}`.trim(),
      });
    }

    return child;
  });
}

export default function Table({ children, variant = "vertical", caption }: TableProps) {
  const isHorizontal = variant === "horizontal";
  const styledChildren = applyClassInTbody(children, isHorizontal);

  return (
    <>
      {caption && <p className={styles["table-caption"]}>{caption}</p>}
      <div className={styles["table-wrap"]}>
        <table className={styles.table}>
          {styledChildren}
        </table>
      </div>
    </>
  );
}

export function TableEm({ children }: { children: React.ReactNode }) {
  return <em className={styles["table-em"]}>{children}</em>;
}
