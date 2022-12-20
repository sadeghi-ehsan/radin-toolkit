import { Modal as AntModal } from "antd";
import { CloseRounded } from "radin-icon";

AntModal.defaultProps = {
  closable: true,
  maskClosable: true,
  mask: true,
  centered: false,
  footer: null,
  closeIcon: <CloseRounded size="2xl" />,
  cancelText: "انصراف",
  okText: "تایید"
};

export const Modal = AntModal;

export default Modal;
