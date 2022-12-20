import { forwardRef, useEffect, useRef, useState } from "react";
import { ExternalLink } from "radin-icon";
import { ITextareaProps, TextareaResizeValues } from "./types";
import { FormElementWrapper } from "../../Atoms/FormElementWrapper";
import { classJoin, extractFormElementProps, filterObj } from "../../../utils";
import { CompoundedComponent } from "../../../types/common";
import { useCombinedRefs } from "../../../hooks/useCombinedRefs";
import { textareaResizeValues } from "./utils";

const Textarea = forwardRef<HTMLDivElement, ITextareaProps>(
  ({ id, className, style, disabled, resize, keepOpen, autoFocus, rows, ...restProps }, ref) => {
    const [isOpenState, setIsOpen] = useState(false);
    const formElementWrapperRef = useRef<HTMLDivElement>();
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const textAreaContentRef = useRef<HTMLDivElement>();
    const combinedRefs = useCombinedRefs(ref, formElementWrapperRef);
    const [wrapperProps, componentProps] = extractFormElementProps(restProps);
    const isOpen = keepOpen || isOpenState;

    const onOpen = () => {
      if (!disabled) setIsOpen(true);
    };

    const onClose = () => {
      combinedRefs.current.querySelector("fieldset").style.transition = "";
      setIsOpen(false);
    };

    const updateFieldsetHeight = () => {
      combinedRefs.current.querySelector("fieldset").style.height = `${
        (textAreaRef.current || textAreaContentRef.current).offsetHeight + 33
      }px`;
    };

    useEffect(() => {
      updateFieldsetHeight();

      let resizeObserver: ResizeObserver;
      if (textAreaRef.current) {
        resizeObserver = new ResizeObserver(updateFieldsetHeight);
        resizeObserver.observe(textAreaRef.current);
      }

      if (isOpen) {
        setTimeout(() => {
          combinedRefs.current.querySelector("fieldset").style.transition = "none";
        }, 100);
      }

      return () => {
        if (resizeObserver) resizeObserver.disconnect();
      };
    }, [isOpen]);

    return (
      <FormElementWrapper
        {...wrapperProps}
        id={id}
        style={style}
        disabled={disabled}
        fieldsetClassName={classJoin(["overflow-hidden", className])}
        endAdornment={
          !isOpen ? <ExternalLink onClick={onOpen} className="hover:text-primary focus:text-primary" /> : undefined
        }
        ref={combinedRefs}
      >
        <div>
          {isOpen ? (
            <textarea
              {...componentProps}
              className={classJoin([
                "w-full bg-transparent outline-none scrollbar-primary pl-2 align-middle text-white disabled:text-disabled",
                textareaResizeValues[resize as TextareaResizeValues],
                componentProps.className
              ])}
              disabled={disabled}
              onBlur={onClose}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={keepOpen ? autoFocus : true}
              ref={textAreaRef}
              onScroll={updateFieldsetHeight}
              rows={rows}
            />
          ) : (
            <div className="grid" ref={textAreaContentRef} {...componentProps}>
              <div
                className={classJoin([
                  "truncate select-none cursor-pointer ",
                  disabled ? "text-disabled" : "",
                  componentProps.value ? "text-white" : "text-idle"
                ])}
                onClick={onOpen}
              >
                {componentProps.value || componentProps.placeholder || "-"}
              </div>
            </div>
          )}
        </div>
      </FormElementWrapper>
    );
  }
) as CompoundedComponent<ITextareaProps>;

Textarea.defaultProps = {
  resize: "none",
  rows: 4,
  readOnly: false,
  disabled: false,
  ...filterObj(
    FormElementWrapper.defaultProps,
    (v, k) =>
      !["startAdornment", "clearable", "allowClear", "onClear", "verified", "disabled", "endLabelAdornment"].includes(k)
  )
};

export default Textarea;
