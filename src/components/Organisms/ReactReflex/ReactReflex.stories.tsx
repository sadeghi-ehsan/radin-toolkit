import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "./ReactReflex";

export default {
  title: "components/Organisms/ReactReflex",
  component: ReflexContainer
} as ComponentMeta<typeof ReflexContainer>;

const Template: ComponentStory<typeof ReflexContainer> = args => {
  return (
    <div className="-m-4 h-screen w-screen bg-appearing">
      <ReflexContainer {...args}>
        <ReflexElement minSize={100}>
          <div>Left Pane (resizeable)</div>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement minSize={100}>
          <div>Right Pane (resizeable)</div>
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

const Template2: ComponentStory<typeof ReflexContainer> = args => {
  return (
    <div className="-m-4 h-screen w-screen bg-appearing">
      <ReflexContainer orientation="vertical">
        <ReflexElement>
          <div>
            <label>Left Pane (resizable)</label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true} />

        <ReflexElement minSize={200} maxSize={300}>
          <div>
            <label>
              Middle Pane (resizable)
              <br />
              <br />
              minSize = 200px
              <br />
              maxSize = 300px
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true} />

        <ReflexElement>
          <div>
            <label>Right Pane (resizable)</label>
          </div>
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical"
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal"
};
export const propagation = Template2.bind({});
propagation.args = {
  orientation: "horizontal"
};
