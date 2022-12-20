// Collapse.stories.ts|tsx

import { Collapse, ICollapseProps } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Atoms/Collapse",
  component: Collapse
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = args => {
  return (
    <Collapse title="اطلاعات فعالیت بازارگردان" {...args}>
      <div>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
      </div>
    </Collapse>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Collapse.defaultProps
} as ICollapseProps;

export const WithHover = Template.bind({});
WithHover.args = {
  ...Default.args,
  withHover: true
} as ICollapseProps;

export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  ...Default.args,
  defaultExpanded: false
} as ICollapseProps;
