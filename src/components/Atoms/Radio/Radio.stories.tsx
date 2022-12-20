// Radio.stories.ts|tsx

import { Radio, IRadioProps } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import useState from "storybook-addon-state";

export default {
  title: "components/Atoms/Radio",
  component: Radio,
  argTypes: {
    name: { control: { disable: true } },
    selected: { control: { disable: true } },
    value: { control: { disable: true } }
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => {
  const [option, setOption] = useState("option", "option1");
  return (
    <>
      <Radio {...args} name="choose" value="option1" selected={v => option === v} onChange={v => setOption(v)}>
        گزینه اول
      </Radio>
      <Radio {...args} name="choose" value="option2" selected={v => option === v} onChange={v => setOption(v)}>
        گزینه دوم
      </Radio>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Radio.defaultProps
} as IRadioProps;
