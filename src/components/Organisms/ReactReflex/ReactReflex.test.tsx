import { render, cleanup } from "@testing-library/react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from ".";

describe("ReactReflex", () => {
  afterEach(cleanup);

  test("should have classNames it's been passed to", () => {
    const component = render(
      <ReflexContainer className="ReflexContainer">
        <ReflexElement minSize={100}>
          <div className="pane-content">Left Pane (resizeable)</div>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement minSize={100}>
          <div className="pane-content">Right Pane (resizeable)</div>
        </ReflexElement>
      </ReflexContainer>
    );

    expect(component.container.getElementsByClassName("ReflexContainer").length).toBe(1);
  });
});

/**
 *
 * 1.test ReflexContainer exist.
 * 2.test ReflexContainer has className it's been passed to. *
 * 3.test ReflexElement exist.
 * 4.test ReflexSplitter exist.
 *
 */
