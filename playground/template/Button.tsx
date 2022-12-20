import { Button as SBTButton } from "../../src";
import { ucFirst } from "../../src";
import { buttonThemes } from "../../src/components/Atoms/Button/utils";

const ButtonsWithTheme = ({ ...restProps }) => (
  <div className="flex mb-2">
    <span className="flex items-center mr-2 text-sm w-14">
      {restProps.disabled ? "Disabled" : restProps.loading ? "Loading" : "Normal"}:
    </span>
    {Object.keys(buttonThemes).map((theme, ind) => (
      // @ts-ignore
      <SBTButton key={ind} {...restProps} className="mb-1 mr-1" theme={theme}>
        آپلود کارت ملی
      </SBTButton>
    ))}
  </div>
);

const ButtonsPack = ({ ...restProps }) => (
  <div className="mt-2 mb-2">
    <h4 className="text-lg font-bold">
      {Object.entries(restProps)
        .map(([attribute, value]) => `${ucFirst(attribute)}: ${value}`)
        .join(", ")}
    </h4>
    <ButtonsWithTheme {...restProps} />
    <ButtonsWithTheme {...restProps} loading />
    <ButtonsWithTheme {...restProps} disabled />
  </div>
);

const Button = () => (
  <>
    <ButtonsPack variant="default" size="sm" />
    <hr />
    <ButtonsPack variant="outline" size="sm" />
    <hr />
    <ButtonsPack variant="text" size="sm" />

    <br />
    <br />
    <br />

    <ButtonsPack variant="default" />
    <hr />
    <ButtonsPack variant="outline" />
    <hr />
    <ButtonsPack variant="text" />

    <br />
    <br />
    <br />

    <ButtonsPack variant="default" size="lg" />
    <hr />
    <ButtonsPack variant="outline" size="lg" />
    <hr />
    <ButtonsPack variant="text" size="lg" />

    <br />
    <br />
    <br />

    <ButtonsPack variant="default" size="xl" />
    <hr />
    <ButtonsPack variant="outline" size="xl" />
    <hr />
    <ButtonsPack variant="text" size="xl" />
  </>
);

export default Button;
