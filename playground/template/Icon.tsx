import * as Icons from "radin-icon";
import { ucFirst } from "../../src";
import { Bookmark, IconProps } from "radin-icon";
import { weights } from "radin-icon/lib/components/Atoms/Icon/base/constants";
import { colors } from "../../src/constants/tailwind";
import { animation, fontSize, rotateClasses } from "../../src/constants/tailwind";

type Variants = {
  variablePropName: string;
  variablePropValues: any[];
  restProps: IconProps;
}[];

const Icon = () => {
  const variants: Variants = [
    {
      variablePropName: "color",
      variablePropValues: Object.keys(colors),
      restProps: {
        size: "6xl"
      }
    },
    {
      variablePropName: "size",
      variablePropValues: Object.keys(fontSize),
      restProps: {}
    },
    {
      variablePropName: "weight",
      variablePropValues: Object.keys(weights),
      restProps: {
        size: "6xl"
      }
    },
    {
      variablePropName: "flip",
      variablePropValues: ["vertical", "horizontal"],
      restProps: {
        size: "6xl"
      }
    },
    {
      variablePropName: "rotate",
      variablePropValues: Object.keys(rotateClasses),
      restProps: {
        size: "6xl"
      }
    },
    {
      variablePropName: "animate",
      variablePropValues: Object.keys(animation),
      restProps: {
        size: "6xl"
      }
    }
  ];

  return (
    <>
      <h1 className="text-3xl">
        Icon
        <Bookmark className="-scale-x-100 scale-y-100 scale-x-100 -scale-y-100" />
      </h1>
      {Object.entries(Icons)
        .filter(([IconName]) => !["IconContext", "renderPathForWeight", "Icon"].includes(IconName))
        .map(([IconName, IconComponent]) => (
          <div key={IconName} className="mb-5">
            <h3 className="text-xl text-warning">{IconName}</h3>
            {variants.map(variant => (
              <div key={variant.variablePropName} className="mb-3">
                <h4 className="text-base text-terminate">{ucFirst(variant.variablePropName)}:</h4>
                <div className="flex flex-wrap items-center">
                  {variant.variablePropValues.map(propValue => (
                    <span key={propValue} className="flex items-center ml-5 text-sm">
                      {propValue}: {/*@ts-ignore*/}
                      <IconComponent
                        {...{
                          [variant.variablePropName]: propValue,
                          ...variant.restProps
                        }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <hr />
          </div>
        ))}
    </>
  );
};

export default Icon;
