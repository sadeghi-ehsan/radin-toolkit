import React, { FunctionComponent } from "react";
import { classJoin } from "../../../../utils";
import { IDropdownSpacerProps } from "../types";

const Spacer: FunctionComponent<IDropdownSpacerProps> = ({ className }) => (
  <div className={classJoin(["h-px w-full my-2 bg-white bg-opacity-5 pointer-events-none p-0", className])} />
);

Spacer.defaultProps = {
  className: ""
};

export default Spacer;
