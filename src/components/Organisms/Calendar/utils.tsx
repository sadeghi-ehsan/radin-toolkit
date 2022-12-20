import { ReactElement } from "react";
import { Chevron } from "@sadeghi-ehsan/radin-icon";

export const RenderHeader = ({
  header
}: {
  position: "top" | "bottom" | "left" | "right";
  header: ReactElement | string;
}): ReactElement =>
  typeof header === "string" ? (
    <div className="text-right pt-4 pb-3 px-4 text-sm font-medium text-primary-label">{header}</div>
  ) : (
    header
  );

/**
 * Left & Right Arrow buttons in header of the calendar
 */
export const renderButton = ({ direction, handleClick, locale }) => {
  const horizontalFlip =
    locale === "fa" ? (direction === "left" ? "vertical" : null) : direction === "right" ? "vertical" : null;
  return (
    <div onClick={handleClick} className="px-4 py-2 cursor-pointer text-idle hover:text-primary">
      <Chevron weight="fill" size=".7xs" flip={horizontalFlip} className=" " />
    </div>
  );
};
