// Skeleton.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Skeleton } from ".";
import { ISkeletonProps } from "./types";

export default {
  title: "components/Atoms/Skeleton",
  component: Skeleton
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => {
  return (
    <div className="border border-disabled rounded w-96 p-5">
      <Skeleton {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Skeleton.defaultProps
} as ISkeletonProps;

export const SmallCards = Template.bind({});
SmallCards.args = {
  ...Skeleton.defaultProps,
  height: "16",
  rounded: "xxl"
} as ISkeletonProps;

export const LargeCards = Template.bind({});
LargeCards.args = {
  ...Skeleton.defaultProps,
  height: "32",
  rounded: "xxl"
} as ISkeletonProps;

export const Avatar = Template.bind({});
Avatar.args = {
  ...Skeleton.defaultProps,
  width: "10",
  height: "10",
  rounded: "full"
} as ISkeletonProps;

const AnimationTemplate: ComponentStory<typeof Skeleton> = args => {
  return (
    <div className="border border-disabled rounded w-96 p-5">
      <Skeleton {...args} className="m-1" animation="none" />
      <Skeleton {...args} className="m-1" animation="pulse-slow" />
      <Skeleton {...args} className="m-1" animation="pulse" />
      <Skeleton {...args} className="m-1" animation="pulse-fast" />
    </div>
  );
};

export const Animations = AnimationTemplate.bind({});
Animations.args = {
  ...Skeleton.defaultProps,
  animation: "none"
} as ISkeletonProps;

const LayoutTemplate: ComponentStory<typeof Skeleton> = args => {
  return (
    <div className="border border-disabled rounded w-96 p-5">
      <Skeleton {...args} className="m-1" />
      <div className="flex flex-row">
        <Skeleton {...args} width="10" height="10" className="m-1" rounded="full" />
        <div className="flex flex-col flex-1">
          <Skeleton {...args} className="m-1" height="32" rounded="xxl" />
          <Skeleton {...args} className="m-1" height="16" rounded="xxl" />
          <Skeleton {...args} className="m-1" />
          <Skeleton {...args} className="m-1" />
        </div>
      </div>
    </div>
  );
};

export const SimpleForm = LayoutTemplate.bind({});
SimpleForm.args = {
  ...Skeleton.defaultProps
} as ISkeletonProps;
