import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IInputCodeVerifyProps, InputCodeVerify } from ".";
import useState from "storybook-addon-state";
import { Button } from "../../Atoms/Button";

export default {
  component: InputCodeVerify,
  title: "components/Molecules/InputCodeVerify"
} as ComponentMeta<typeof InputCodeVerify>;

const SimpleTemplate: ComponentStory<typeof InputCodeVerify> = (args: any) => {
  const [value1, setValue1] = useState("value1", args.initialValue);
  const [loading, setLoading] = useState("loading", args.isLoading);

  return (
    <div>
      <div>
        <InputCodeVerify
          {...args}
          isLoading={loading}
          value={value1}
          onChange={val => {
            setValue1(val);
          }}
          onResend={v => alert(`re-send btn clicked! user hit re-send btn "${v}" times until now!`)}
        />
      </div>

      <br />
      <div>{value1}</div>
      <Button
        onClick={() => {
          setValue1(null);
          setLoading(false);
        }}
      >
        reset {"&"} focus first
      </Button>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...InputCodeVerify.defaultProps,
  name: "input",
  label: "کــد تـاییـــد",
  inputsLength: 5
} as IInputCodeVerifyProps;

export const InitialValue = SimpleTemplate.bind({});
InitialValue.args = {
  ...Default.args,
  inputsLength: 4,
  initialValue: "1234"
} as IInputCodeVerifyProps;

export const disabled = SimpleTemplate.bind({});
disabled.args = {
  ...Default.args,
  disabled: true
} as IInputCodeVerifyProps;

export const loading = SimpleTemplate.bind({});
loading.args = {
  ...Default.args,
  isLoading: true,
  initialValue: "12345"
} as IInputCodeVerifyProps;
