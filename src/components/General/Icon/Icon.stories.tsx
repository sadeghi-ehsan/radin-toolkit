// Icon.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as Icons from "@sadeghi-ehsan/radin-icon";
import { Activity, Icon, IconProps, IconContext } from "@sadeghi-ehsan/radin-icon";
import { forwardRef } from "react";

export default {
  title: "general/Icons",
  component: Icon,
  argTypes: {
    as: { control: { disable: true } }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Activity> = args => <Activity {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...(Icon.defaultProps || {})
};

const TemplateAll: ComponentStory<typeof Activity> = args => (
  <div className="flex flex-wrap">
    {Object.entries(Icons)
      .filter(([IconName]) => !["IconContext", "renderPathForWeight", "Icon"].includes(IconName))
      .map(([IconName, IconComponent]) => (
        <div className="mx-2 mb-2 flex flex-col justify-center items-center">
          <h3 className="mb-1">{IconName}</h3>
          {/*@ts-ignore*/}
          <IconComponent {...args} />
        </div>
      ))}
  </div>
);

export const AllIcons = TemplateAll.bind({});
AllIcons.args = {
  ...Default.args
};

const TemplateContext: ComponentStory<typeof Icon> = args => (
  <div className="flex flex-wrap">
    <IconContext.Provider value={args}>
      {Object.entries(Icons)
        .filter(([IconName]) => !["IconContext", "renderPathForWeight", "Icon"].includes(IconName))
        .map(([IconName, IconComponent]) => (
          <div key={IconName} className="mx-2 mb-2 flex flex-col justify-center items-center">
            <h3 className="mb-1">{IconName}</h3>
            {/*@ts-ignore*/}
            <IconComponent />
          </div>
        ))}
    </IconContext.Provider>
  </div>
);

export const WithContext = TemplateContext.bind({});
WithContext.args = {
  ...Default.args
};

const TemplateCustom: ComponentStory<typeof Icon> = args => {
  const ActivitySvg = forwardRef<SVGElement, IconProps>(({ fill, ...restProps }, ref) => (
    // @ts-ignore
    <svg width="2em" height="2em" fill="currentColor" viewBox="0 0 256 256" {...restProps} ref={ref}>
      <rect width="256" height="256" fill="none" />
      <polyline
        points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ));

  return <Icon as={ActivitySvg} {...args} />;
};

export const WithCustomIcon = TemplateCustom.bind({});
WithCustomIcon.args = {
  ...Default.args,
  color: "current",
  size: "base",
  weight: "regular"
};
