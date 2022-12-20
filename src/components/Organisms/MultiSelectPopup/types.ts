import { StandardProps } from "../../../types/common";
import { IButtonProps } from "../../Atoms/Button";

interface DefaultPopupInterface {
  /** Tree like data that is displayed and can be selected */
  data: any[];

  /** determine field text of each item on data array which will be displayed */
  dataTextField?: string;

  /** determine field identifier of each item on data array */
  dataValueField?: string;

  /** determine search fields of each item on data array */
  dataSearchFields?: string[];

  /** determine children field of each item on data array */
  dataChildrenField?: string;

  /** determine Growth field of each item on data array */
  dataGrowthField?: string;

  /** function that will be invoked when close button on popup click */
  onClose: () => void;

  /** labels of buttons and titles on popup for customization */
  labels?: {
    submit?: string;
    cancel?: string;
    parentSelectPopupTitle?: string;
    clearSelectedParents?: string;
    notFoundMessage?: string;
  };
}

export interface IParentSelectPopupProps
  extends Required<Omit<DefaultPopupInterface, "dataChildrenField" | "dataGrowthField" | "dataSearchFields">> {
  /** selected items state of parent slection popup */
  selectedItems: any[];

  /** function that will be invoked when submit button on parent popup click */
  onSubmit: (items: any[]) => void;

  /** set method of selected items state in parent slection popup */
  setSelectedItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface IMultiSelectPopupProps extends DefaultPopupInterface, Omit<StandardProps, "children"> {
  /** display a loading icon on component and disable submit button */
  isLoading?: boolean;

  /** set and override props of submit button */
  submitButtonProps?: Partial<IButtonProps>;

  /** set and override props of cancel button */
  cancelButtonProps?: Partial<IButtonProps>;

  /** default value of selected items */
  defaultValue?: any[];

  /** function that will be invoked when submit button on popup click */
  onSubmit: ({ selectedItems, clear }: { selectedItems: any[]; clear: () => void }) => void;
}
