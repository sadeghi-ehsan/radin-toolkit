import { forwardRef, useRef, useState } from "react";
import { Chevron } from "@sadeghi-ehsan/radin-icon";
import { ICollapseProps } from "./types";
import { CLOSE, OPEN } from "./utils";

export const Collapse = forwardRef<HTMLDivElement, ICollapseProps>(
  ({ withHover, title, defaultExpanded, disabled, onChange, className, children }, ref) => {
    const [expand, setExpand] = useState<boolean>(defaultExpanded);
    const collapseRef = useRef<any>();
    const handleCollapse = () => {
      if (!disabled) {
        onChange(!expand);
        setExpand(!expand);
        const { classList } = collapseRef.current;
        if (classList.contains(CLOSE)) {
          classList.replace(CLOSE, OPEN);
          classList.add("py-2");
        } else {
          classList.replace(OPEN, CLOSE);
          classList.remove("py-2");
        }
      }
    };

    const options = withHover
      ? {
          onBlur: handleCollapse,
          onFocus: handleCollapse,
          onMouseOut: handleCollapse,
          onMouseOver: handleCollapse
        }
      : {
          onClick: handleCollapse
        };

    return (
      <div className={className}>
        <div ref={ref} {...options} className="border-b border-light/20 pb-1 cursor-pointer">
          <span className="text-primary-label text-base">{title}</span>
          <Chevron
            size="lg"
            rotate="90"
            flip={expand ? "horizontal" : "vertical"}
            color="light-text"
            className="inline mr-1"
          />
        </div>
        <div
          className={`overflow-hidden transition-all ${defaultExpanded ? `${OPEN} py-2` : CLOSE} duration-700`}
          ref={collapseRef}
        >
          {children}
        </div>
      </div>
    );
  }
);

Collapse.defaultProps = {
  withHover: false,
  defaultExpanded: true,
  disabled: false,
  onChange: () => {}
};

export default Collapse;
