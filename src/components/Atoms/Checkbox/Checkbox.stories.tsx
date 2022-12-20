// Checkbox.stories.ts|tsx

import { Checkbox, ICheckboxProps } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import useState from "storybook-addon-state";

export default {
  title: "components/Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    name: { control: { disable: true } },
    selected: { control: { disable: true } },
    value: { control: { disable: true } }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => {
  const [options, setOptions] = useState("options", []);
  return (
    <>
      <Checkbox
        {...args}
        name="choose"
        value="option"
        selected={v => options.includes(v)}
        onChange={(v, checked) => (checked ? setOptions([...options, v]) : setOptions(options.filter(o => o !== v)))}
      >
        انتخاب گزینه
      </Checkbox>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Checkbox.defaultProps
} as ICheckboxProps;
