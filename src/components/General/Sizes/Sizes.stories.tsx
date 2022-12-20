import { ComponentStory } from "@storybook/react";
import { fontSize, fontSizeName } from "../../../constants/tailwind";

export default {
  title: "general/Sizes"
};

const TemplateFontSizes: ComponentStory<any> = args => (
  <div>
    <div className="grid items-center grid-cols-4">
      <div className="text-disabled">fontSize name</div>
      <div className="text-disabled">rem</div>
      <div className="text-disabled">in pixel</div>
      <div className="text-disabled">Example</div>
    </div>
    <hr />

    {Object.entries(fontSize).map(([name, value]) => (
      <div key={name} className="grid items-center grid-cols-4">
        <div className="">{name}</div>
        <div className="text-terminate">{value}</div>{" "}
        <div className="text-error">{Math.round(Number(value.replace("rem", "")) * 16)}px</div>
        <div className={fontSizeName[name]}>نمونه</div>
      </div>
    ))}
  </div>
);

export const FontSizes = TemplateFontSizes.bind({});
FontSizes.args = {
  ...FontSizes.args
};
