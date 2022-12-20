import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BaseInput } from ".";
import useState from "storybook-addon-state";

export default {
  component: BaseInput,
  title: "components/Atoms/BaseInput"
} as ComponentMeta<typeof BaseInput>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof BaseInput> = args => {
  const [value, setValue] = useState("value", "");
  const onChange = v => {
    setValue(v);
  };

  return (
    <>
      <div>
        <div>
          <BaseInput {...args} onChange={onChange} value={value} />
        </div>
        <br />
        <pre>value : {value}</pre>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...BaseInput.defaultProps,
  name: "name",
  placeholder: "placeholder"
};
