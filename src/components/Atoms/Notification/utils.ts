import { BadgeColors } from "../Badge";
import { NotificationColorType } from "./types";

export const bindBadgeColor: { [key in NotificationColorType]: BadgeColors } = {
  primary: "primary",
  terminate: "terminate",
  warning: "warning",
  error: "error",
  success: "success"
};
