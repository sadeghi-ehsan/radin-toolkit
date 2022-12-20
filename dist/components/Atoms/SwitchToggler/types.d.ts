import { SwitchProps } from "antd";
import { TailwindTextColors } from "../../../types/tailwind";
export interface ISwitchTogglerProps extends Omit<SwitchProps, "size"> {
    /**
     * The color of the switch.
     */
    color?: TailwindTextColors;
    /**
     * size of the switch
     */
    size?: "small" | "default";
    /**
     * reverse the switch horizontally
     */
    reverse?: boolean;
}
