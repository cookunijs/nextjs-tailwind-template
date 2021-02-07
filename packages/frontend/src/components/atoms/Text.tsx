import React from "react";
import { ChildrenProps } from "@components/utils";

export interface TextProps extends ChildrenProps {
  weight: "light" | "medium" | "bold";
}

export const Text: React.FC<TextProps> = ({ children, weight }) => {
  const typeClass =
    weight === "light"
      ? "font-light"
      : weight === "medium"
      ? "font-medium"
      : weight === "bold"
      ? "font-bold"
      : "font-normal";

  return <p className={`${typeClass}`}>{children}</p>;
};
