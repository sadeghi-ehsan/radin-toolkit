import { ConfigProvider, Layout } from "antd";
import "./style.pcss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#181D36"
      }
    ]
  },
  layout: "centered"
};

export const decorators = [
  StoryFn => (
    <ConfigProvider direction="rtl">
      <Layout className="flex-row flex-wrap" dir="rtl">
        {<StoryFn />}
      </Layout>
    </ConfigProvider>
  )
];
