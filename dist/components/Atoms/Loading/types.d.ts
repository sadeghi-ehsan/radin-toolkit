import { TailwindColors } from "../../../types/tailwind";
import { StandardProps } from "../../../types/common";
export interface ILoadingProps extends Omit<StandardProps, "children"> {
    /**
     * The color of the loading.
     * @default "white"
     */
    color?: TailwindColors;
}
