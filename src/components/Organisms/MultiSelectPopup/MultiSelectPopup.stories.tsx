// MultiSelectPopup.stories.ts|tsx
import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Popover } from "../../Atoms/Popover";
import { Button } from "../../Atoms/Button";
import { MultiSelectPopup } from ".";
import { IMultiSelectPopupProps } from "./types";

export default {
  title: "components/Organisms/MultiSelectPopup",
  component: MultiSelectPopup
} as ComponentMeta<typeof MultiSelectPopup>;

const Template: ComponentStory<typeof MultiSelectPopup> = args => {
  const [visible, setVisible] = useState(false);

  const data = [];

  for (let i = 10; i < 20; i++) {
    data.push({
      id: i,
      name: `laye ${i}`,
      title: "hasan dasdasdasdasdasdasdawd adasdasdas " + i,
      children: [
        {
          id: 10 * i + 1,
          name: `laye ${i}-1`,
          short_name: `short_name ${i}-1`,
          growth: "-",

          title: "hasan " + i
        },
        {
          id: 10 * i + 2,
          name: `laye ${i}-2`,
          short_name: `short_name ${i}-2`,
          growth: null,
          title: "hasan " + i
        },
        {
          id: 10 * i + 3,
          name: `laye ${i}-3`,
          short_name: `short_name ${i}-3`,
          growth: 5,
          title: "hasan " + i
        },
        {
          id: 10 * i + 4,
          name: `laye ${i}-4`,
          short_name: `short_name ${i}-4`,
          growth: -2,
          title: "hasan " + i
        }
      ]
    });
  }

  return (
    <Popover
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
      content={
        <MultiSelectPopup
          {...args}
          data={data}
          defaultValue={[101, 111, 112]}
          dataTextField="title"
          dataSearchFields={["title", "short_name"]}
          submitButtonProps={{ theme: "error" }}
          onClose={() => setVisible(false)}
          onSubmit={items => {
            console.log(JSON.stringify(items, null, 2));
            setVisible(false);
          }}
        />
      }
    >
      <Button>انتخاب نماد</Button>
    </Popover>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...MultiSelectPopup.defaultProps
} as IMultiSelectPopupProps;
