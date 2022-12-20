// Divider.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "../Checkbox";
import { Popover } from ".";
import { Button } from "../Button";
import { IPopoverProps } from "./types";
import { Typography } from "../Typography";
import { Input } from "../../Molecules/Input";

export default {
  title: "components/Atoms/Popover",
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = args => {
  const overlay = (
    <div>
      <Typography className="mb-2">body of the popover</Typography>
      <Input size="sm" label="نام سند" />
    </div>
  );

  return (
    <Popover {...args} content={overlay}>
      <Button>Open</Button>
    </Popover>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Popover.defaultProps,
  trigger: ["click"],
  placement: "bottom"
} as IPopoverProps;
