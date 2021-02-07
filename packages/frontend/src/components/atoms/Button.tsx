import React from "react";
import { ChildrenProps } from "@components/utils";
import { Text, TextProps } from "@components/atoms";
import "@styles/components/atoms/Button.module.scss";

export interface ButtonProps extends ChildrenProps, TextProps {
  type: "rounded" | "circular";
  size: "xs" | "sm" | "md" | "lg";
  color: "primary" | "secondary" | "success" | "dark" | "light" | "rainbow";
}

export const Button: React.FC<ButtonProps> = ({ children, type, size, weight, color }) => {
  const baseClass = "w-full rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  const typeClass = type === "rounded" ? "rounded" : type === "circular" ? "rounded-full" : "";
  const sizeClass =
    size === "xs"
      ? "px-2.5 py-1.5 text-xs leading-4"
      : size === "sm"
      ? "px-3 py-2 text-sm leading-4"
      : size === "md"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-base"
      : "";
  const colorClass =
    color === "primary"
      ? "shadow-sm border border-transparent text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
      : color === "secondary"
      ? "shadow-sm border border-transparent text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500"
      : color === "success"
      ? "shadow-sm border border-transparent text-white bg-green-300 hover:bg-green-400 focus:ring-green-200"
      : color === "dark"
      ? "shadow-sm border border-transparent text-white bg-gray-800 hover:bg-gray-900"
      : color === "light"
      ? "text-gray-500 bg-white hover:bg-gray-100 focus:ring-white"
      : color === "rainbow"
      ? "shadow-sm text-white transition duration-500 ease-in-out bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 transform hover:shadow-none hover:from-pink-500 hover:to-yellow-400 hover:-translate-y-1 hover:scale-105 focus:ring-white"
      : "";

  return (
    <button type="button" className={`${baseClass} ${typeClass} ${sizeClass} ${colorClass}`}>
      <Text weight={weight}>{children}</Text>
    </button>
  );
};
