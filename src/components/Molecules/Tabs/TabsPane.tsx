import { FunctionComponent } from "react";
import { ITabsPaneProps } from "./types";

export const TabsPane: FunctionComponent<ITabsPaneProps> = ({ className, children, paneStyle }) => (
  <div style={paneStyle} className={className}>
    {children}
  </div>
);

export default TabsPane;

TabsPane.defaultProps = {
  pin: false,
  disabled: false,
  notice: false,
  favorite: false,
  title: "",
  newTab: false,
  fix: false,
  deletable: true,
  editable: true
};
