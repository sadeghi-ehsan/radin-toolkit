import { ComponentStory } from "@storybook/react";
import { classJoin } from "../../../utils";
import { colors, textColors, bgColors } from "../../../constants/tailwind";

export default {
  title: "general/Colors"
};

const TemplateColors: ComponentStory<any> = args => (
  <div className="flex flex-wrap">
    {Object.entries(colors).map(([name, value]) => (
      <div key={name} className="flex flex-col items-center justify-center mx-2 mb-2">
        <div className={classJoin(["flex flex-col justify-center h-20 text-center w-36", bgColors[name]])}>
          <div className="font-bold mix-blend-difference">{name}</div>
          <div className="!font-serif text-xs opacity-80 mix-blend-difference">{value}</div>
        </div>
      </div>
    ))}
  </div>
);

const TemplateTextColors: ComponentStory<any> = args => (
  <div className="grid grid-cols-3">
    {Object.entries(textColors).map(([name, value]) => (
      <div key={name} className="mx-2 mb-2 ">
        <div className={value}>{value}</div>
      </div>
    ))}
  </div>
);

const TemplateBgColors: ComponentStory<any> = args => (
  <div className="flex flex-wrap">
    {Object.entries(bgColors).map(([name, value]) => (
      <div key={name} className="flex flex-col items-center justify-center mx-2 mb-2">
        <div className={classJoin(["flex flex-col justify-center w-36 h-20 text-center", value])}>
          <div className="text-xs opacity-80 mix-blend-difference">{value}</div>
        </div>
      </div>
    ))}
  </div>
);

export const Colors = TemplateColors.bind({});
Colors.args = {
  ...Colors.args
};

export const TextColors = TemplateTextColors.bind({});
TextColors.args = {};

export const BgColors = TemplateBgColors.bind({});
BgColors.args = {};
