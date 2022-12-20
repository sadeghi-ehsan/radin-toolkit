import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../Molecules/Input";
import { FieldGroup } from ".";
import useState from "storybook-addon-state";

export default {
  component: FieldGroup,
  title: "components/Atoms/FieldGroup"
} as ComponentMeta<typeof FieldGroup>;

const Template: ComponentStory<typeof FieldGroup> = ({ ...args }) => {
  const [value, setValue] = useState("values", { value1: "", value2: "" });
  const [isDirty, setIsDirty] = useState("isDirty", { isDirty1: false, isDirty2: false });
  const [error, setError] = useState("errors", { error1: args.error || false, error2: args.error || false });

  return (
    <FieldGroup {...args} error={error.error1 || error.error2}>
      <>
        <Input
          label="1"
          className="first:mb-2"
          error={error.error1}
          value={value.value1}
          verified={!error.error1 && isDirty.isDirty1}
          onChange={val => {
            setValue({ ...value, value1: val });
            setIsDirty({ ...isDirty, isDirty1: val });
          }}
        />
        <Input
          label="2"
          className="first:mb-2"
          error={error.error2}
          value={value.value2}
          verified={!error.error2 && isDirty.isDirty2}
          onChange={val => {
            setValue({ ...value, value2: val });
            setIsDirty({ ...isDirty, isDirty2: val });
          }}
        />
      </>
    </FieldGroup>
  );
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  groupLabel: "عنوان"
};

export const withError = Template.bind({});
withError.args = {
  groupLabel: "لیبل",
  error: "ورود فیلد الزامی است."
};

export const variantNone = Template.bind({});
variantNone.args = {
  groupLabel: "لیبل",
  variant: "none"
};

export const variantFill = Template.bind({});
variantFill.args = {
  groupLabel: "Fill variant",
  variant: "fill"
};
