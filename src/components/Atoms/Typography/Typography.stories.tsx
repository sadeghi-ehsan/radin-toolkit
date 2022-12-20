// Typography.stories.tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { fontSize } from "../../../constants/tailwind";
import { Typography } from ".";
import { textVariants } from "./utils";

export default {
  title: "components/Atoms/Typography",
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args}>لورم ایپسوم متن ساختگی با تولید سادگی</Typography>
);

const TemplateAllVariants: ComponentStory<any> = args => (
  <div>
    <div className="grid items-center grid-cols-4">
      <div className="text-disabled">variant name</div>
      <div className="text-disabled">tailwind class</div>
      <div className="text-disabled">in pixel</div>
      <div className="text-disabled">Example</div>
    </div>
    <hr />
    {Object.entries(textVariants).map(([name, value]) => (
      <div key={name} className="grid items-center grid-cols-4">
        <div className="">{name}</div>
        <div className="text-terminate">{value}</div>{" "}
        <div className="text-error">
          {Math.round(Number(fontSize[value.replace("text-", "")].replace("rem", "")) * 16)}px
        </div>
        <div className={value}>لورم ایپسوم</div>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...Typography.defaultProps
};

export const AllVariants = TemplateAllVariants.bind({});
AllVariants.args = {};
