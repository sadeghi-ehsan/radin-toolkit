import { StandardProps } from "../../../types/common";

export interface ICollapseProps extends StandardProps {
  /** define title of collapse */
  title?: string;

  /** collapse can expand with Hover or click */
  withHover?: boolean;

  /** it specified the default condition of expand */
  defaultExpanded?: boolean;

  /** Prevents expand and collapse component */
  disabled?: boolean;

  /** Called when the component condition changes */
  onChange?: (value: boolean) => void;
}
