import { FunctionComponent } from "react";
import { Check, Pencil, RoundedSquare } from "@sadeghi-ehsan/radin-icon";
import { classJoin } from "../../../utils";

export const RenderMainIcon: FunctionComponent<any> = ({
  icon,
  isIconOutlined,
  isActive,
  isBeforeStep,
  isRemainIcon,
  isError
}) => (
  <div className="relative shrink-0">
    {isIconOutlined ? (
      <RoundedSquare
        className="w-7.2 h-7.2 md:w-10 md:h-10"
        color={isError ? "necessary" : isActive ? "primary" : "idle"}
      />
    ) : (
      <>
        {isBeforeStep && (
          <RoundedSquare
            className="w-7.2 h-7.2 md:w-10 md:h-10 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            color={isError ? "necessary" : "primary"}
          />
        )}
        <RoundedSquare
          weight="fill"
          className="w-7.2 h-7.2 md:w-10 md:h-10"
          color={isError ? "necessary" : isActive ? "primary" : "idle"}
        />
        {isBeforeStep && (
          <RoundedSquare
            weight="fill"
            className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 opacity-20 top-1/2 left-1/2 -z-10"
            color={isError ? "necessary" : "primary"}
          />
        )}
      </>
    )}

    {icon && (
      <div
        className={classJoin([
          "absolute m-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
          isRemainIcon || isIconOutlined || isError ? "text-white" : "text-disabled"
        ])}
      >
        {icon}
      </div>
    )}
  </div>
);

export const RenderEditIcon: FunctionComponent<any> = ({ direction }) => (
  <div
    className={classJoin(["relative group", direction === "vertical" ? "-ml-0.75 md:-ml-1.2" : " -mt-0.5 md:-mt-1"])}
  >
    <RoundedSquare
      weight="fill"
      className="w-5 h-5 md:w-6 md:h-6 transition text-primary group-hover:text-primary-hover"
    />

    <div className="absolute m-0 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Pencil className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
    </div>
  </div>
);

export const RenderStepIcon: FunctionComponent<any> = ({ isCurrent, isFinish, isError }) => (
  <div className={classJoin(["w-3.5 h-3.5 border rounded-full shrink-0", isFinish ? "pr-px pt-px" : "p-0.75"])}>
    {isFinish ? (
      <Check size=".8xs" color="white" />
    ) : (
      <div
        className={classJoin([
          "w-full h-full rounded-full",
          isError ? "bg-necessary" : !isCurrent ? "bg-transparent" : "bg-primary"
        ])}
      />
    )}
  </div>
);
