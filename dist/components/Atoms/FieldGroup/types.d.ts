import { TailwindTextColors } from "../../../types/tailwind";
import { IFormElWrapperProps } from "../FormElementWrapper";
export declare type FieldGroupVariant = "outline" | "fill" | "none";
export interface IFieldGroupProps extends Omit<IFormElWrapperProps, "size" | "legendVariant" | "fieldsetVariant" | "allowClear" | "clearable" | "onClear" | "startAdornment" | "endAdornment" | "endLabelAdornment" | "verified"> {
    /** 3 different forms the wrapper component could be shown in
     * which are outline, fill and none which has no style or border */
    variant?: FieldGroupVariant;
    /** if variant is not passed, legendVariant and fieldsetVariant will work properly.
     * also if variant is passed and neither legendVariant nor fieldsetVariant is passed,
     * so variant will work properly by itself.
     */
    /** variants applied only to legend
     * used by groupField */
    legendVariant?: "fill" | "none";
    /** variants applied only to fieldset
     * used by groupField */
    fieldsetVariant?: "outline" | "fill" | "none";
    /** groupLabel is used as legend for the fieldset (label for the whole section of fields) */
    groupLabel?: string;
    /** color set for groupField's label */
    labelColor?: TailwindTextColors;
}
