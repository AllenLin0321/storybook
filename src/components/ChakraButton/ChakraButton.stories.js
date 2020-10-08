import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

const Template = args => {
  const { content, ...rest } = args;
  return <Button {...rest}>{content}</Button>;
};

export const Success = Template.bind({});
export const Danger = Template.bind({});
Success.args = {
  variantColor: "green",
  content: "Success",
};

Danger.args = {
  variantColor: "red",
  content: "Danger",
};
