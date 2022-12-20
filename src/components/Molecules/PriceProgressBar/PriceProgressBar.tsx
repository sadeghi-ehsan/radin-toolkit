import { forwardRef } from "react";
import { IPriceProgressBarProps } from "./types";
import { convertIntToCurrency, commaSeparator, classJoin } from "../../../utils";
import { Badge } from "../../Atoms/Badge";

export const PriceProgressBar = forwardRef<HTMLDivElement, IPriceProgressBarProps>(
  ({ count, volume, percentage, direction, className, style, ...restProps }, ref) => {
    // The below statement check if percentage be between 0 and 100 and return 0 if it was undefined
    const inRangePercentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage || 0;
    const volumeData = volume || volume === 0 ? convertIntToCurrency(volume) : null;

    return (
      <div ref={ref} style={{ direction, ...style }} className={classJoin(["w-44", className])} {...restProps}>
        <div className="flex flex-row justify-between mb-1">
          <span dir="rtl">
            {volume || volume === 0 ? (
              <>
                {volumeData.unit && (
                  <Badge className="!bg-dark-text !bg-opacity-20 !text-white ml-1">{volumeData.unit}</Badge>
                )}
                {commaSeparator(volumeData.value)}
              </>
            ) : (
              <span>-</span>
            )}
          </span>

          {count || count === 0 ? <span>{commaSeparator(count)}</span> : <span>-</span>}
        </div>
        <div className="relative bg-light bg-opacity-20 h-3 rounded mb-0.5">
          <div
            style={{ width: `${inRangePercentage}%` }}
            className={classJoin([
              `h-3 rounded`,
              direction === "rtl" ? "radin-price-progress-bar-prompt-bar" : "radin-price-progress-bar-success-bar"
            ])}
          >
            <span>&nbsp;</span>

            <div
              className={classJoin([
                "rounded text-xs text-center w-12 bg-dark-text bg-opacity-30",
                direction === "rtl"
                  ? "radin-price-progress-bar-prompt-percentage"
                  : "radin-price-progress-bar-success-percentage"
              ])}
            >
              {inRangePercentage}%
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PriceProgressBar.defaultProps = { direction: "rtl" };

export default PriceProgressBar;
