import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
    children: { control: "text" },
    /*all click handler*/
    // onClick: { action: "clicked" },
  },
};

const Template = args => <Button {...args} />;

export const Success = Template.bind({});
export const Danger = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
  onClick: action("Click Event"),
};

Danger.args = {
  variantColor: "red",
  children: "Danger",
  ...actions("onClick", "onMouseOver"),
};
