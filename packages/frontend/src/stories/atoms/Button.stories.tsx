import React from "react";
import { Button as Component, ButtonProps as Props } from "@components/atoms";

const args: Props = {
  children: "Button",
  type: "circular",
  color: "primary",
  size: "md",
  weight: "bold",
};

export default {
  title: "Button",
  component: Component,
  args,
};

export const Control: React.FC<Props> = (props) => (
  <Component {...props}>{props.children}</Component>
);
