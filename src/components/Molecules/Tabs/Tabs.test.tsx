import "jest-canvas-mock";
import { render, cleanup } from "@testing-library/react";
import { Tabs, TabsPane } from ".";

describe("Tabs", () => {
  afterEach(cleanup);

  const single = [
    {
      title: "جدوال 1",
      disabled: false,
      key: "11"
    }
  ];

  test("should have classNames it's been passed to", () => {
    const component = render(
      <div>
        <Tabs showMoreOptions showRemove growTabs showFavorite showAddButton className="test">
          {single.map(item => (
            <TabsPane key={item?.key} title={item?.title}>
              <h1>{item.title} تست تب فعال</h1>
            </TabsPane>
          ))}
        </Tabs>
      </div>
    );

    expect(component.container.getElementsByClassName("test").length).toBe(1);
  });
});
// when showAddButton is true add button should be visible
// when defaultActiveKey is passed, tab should expand the tab with the defaultActiveKey
// when any change happen on tab, onDataChange should be called
