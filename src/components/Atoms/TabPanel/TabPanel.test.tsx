import { render, cleanup } from "@testing-library/react";
import { TabPanel } from "./index";
import TabPane from "./TabPane";

describe("Radio", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(
      <TabPanel className="test">
        <TabPane title="تب تستی" />
      </TabPanel>
    );

    expect(component.container.getElementsByClassName("test").length).toBe(1);
  });
});

// when tools array is empty should tabPanel not render any tools
// when defaultActiveKey is passed, should tabPanel expand the tab with the defaultActiveKey
// should tabPanel change active tab when click on tab title when clicking on it
