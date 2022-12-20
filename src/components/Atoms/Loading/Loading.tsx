import { FunctionComponent } from "react";
import { classJoin } from "../../../utils";
import { ILoadingProps } from "./types";
import { colors } from "../../../constants/tailwind";

const Loading: FunctionComponent<ILoadingProps> = ({ color, className }) => (
  <div
    className={classJoin([
      "loading-spinner1",
      !className?.includes("w-") ? "w-10" : "",
      !className?.includes("h-") ? "h-10" : "",
      className
    ])}
  >
    <div className="loader">
      <svg className="circular" viewBox="25 25 50 50">
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="6"
          strokeMiterlimit="10"
          stroke={colors[color]}
        />
      </svg>
    </div>
  </div>
);

Loading.defaultProps = { color: "white" };

export default Loading;
