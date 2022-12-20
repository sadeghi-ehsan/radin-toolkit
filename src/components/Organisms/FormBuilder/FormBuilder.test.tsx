import "jest-canvas-mock";
import { render, cleanup, screen } from "@testing-library/react";
import { FormBuilder } from ".";
import useFormBuilder from "./components/useFormBuilder";

const RenderFormBuilder = () => {
  const formBuilder = useFormBuilder();

  return <FormBuilder schema={[]} data-testid="form-element" form={formBuilder} />;
};

describe("FormBuilder component", () => {
  beforeEach(() => {
    render(<RenderFormBuilder />);
  });

  afterEach(cleanup);

  it("should renders", () => {
    expect(screen.getByTestId("form-element")).toBeInTheDocument();
  });

  // 1. test all schema fields
  // 2. test onSubmit
  // 3. test formDefaultValues
  // 4. test onFormChange
  // 5. test defaultRequiredErrorMessage
  // 6. test formOptions
});
