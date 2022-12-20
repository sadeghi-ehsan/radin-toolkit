// Badge.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from ".";
import { Activity } from "@sadeghi-ehsan/radin-icon";
import { IBadgeProps } from "./types";

export default {
  title: "components/Atoms/Badge",
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...Badge.defaultProps,
  children: "+ 200"
} as IBadgeProps;

export const Badges = Template.bind({});
Badges.args = {
  ...Badge.defaultProps,
  type: "badge",
  color: "warning-black",
  content: <Activity size="base" color="primary" />,
  children: "555"
} as IBadgeProps;

export const AvailabilityStates = Template.bind({});
AvailabilityStates.args = {
  ...Badge.defaultProps,
  type: "state"
} as IBadgeProps;

const CustomizedTemplate: ComponentStory<typeof Badge> = args => {
  return (
    <div className="flex flex-row items-center justify-around w-32">
      <Badge {...args} type="tag">
        + 200
      </Badge>
      <Badge {...args} type="badge" content={<Activity size="base" color="primary" />}>
        10
      </Badge>
      <Badge {...args} type="state" />
    </div>
  );
};

export const CustomClassName = CustomizedTemplate.bind({});
CustomClassName.args = {
  ...Badge.defaultProps,
  className: "bg-warning text-warning"
} as IBadgeProps;

const StringBadges: ComponentStory<typeof Badge> = args => {
  return (
    <div className="flex flex-row items-center justify-around w-96">
      <Badge {...args} type="tag" color="primary" className="!bg-transparent select-none">
        ریال
      </Badge>
      <Badge {...args} type="tag" color="disabled" className="!bg-transparent select-none">
        ریال
      </Badge>
      <Badge {...args} type="tag" className="!bg-transparent !text-white select-none">
        ریال
      </Badge>
      <Badge {...args} type="tag" color="disabled" className="!bg-transparent select-none">
        %
      </Badge>
    </div>
  );
};

export const CustomStringBadges = StringBadges.bind({});
StringBadges.args = {
  ...Badge.defaultProps,
  className: "bg-warning text-warning"
} as IBadgeProps;
