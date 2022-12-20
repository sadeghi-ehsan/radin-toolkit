// Skeleton.stories.ts|tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PriceProgressBar } from ".";
import { IPriceProgressBarProps } from "./types";

export default {
  title: "components/Molecules/PriceProgressBar",
  component: PriceProgressBar,
  argTypes: {
    direction: { control: { disable: true } }
  }
} as ComponentMeta<typeof PriceProgressBar>;

const DefaultTemplate: ComponentStory<typeof PriceProgressBar> = args => {
  return (
    <div className="flex flex-row items-center">
      <PriceProgressBar percentage={78.04} {...args} direction="ltr" />
      <div className="mx-10">حقیقی</div>
      <PriceProgressBar percentage={78.04} {...args} />
    </div>
  );
};

const DirectionalTemplate: ComponentStory<typeof PriceProgressBar> = args => {
  return <PriceProgressBar percentage={78.04} {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  ...PriceProgressBar.defaultProps,
  count: 1748,
  volume: 160372685
} as IPriceProgressBarProps;

export const WithoutCountAndVolume = DefaultTemplate.bind({});
WithoutCountAndVolume.args = {
  ...PriceProgressBar.defaultProps
} as IPriceProgressBarProps;

export const LeftToRight = DirectionalTemplate.bind({});
LeftToRight.args = {
  ...PriceProgressBar.defaultProps,
  direction: "ltr",
  count: 1748,
  volume: 160372685
} as IPriceProgressBarProps;

export const RightToLeft = DirectionalTemplate.bind({});
RightToLeft.args = {
  ...PriceProgressBar.defaultProps,
  direction: "rtl",
  count: 1748,
  volume: 160372685
} as IPriceProgressBarProps;
