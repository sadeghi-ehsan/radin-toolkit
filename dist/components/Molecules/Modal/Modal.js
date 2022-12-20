import { jsx as _jsx } from "react/jsx-runtime";
import { Modal as AntModal } from "antd";
import { CloseRounded } from "@sadeghi-ehsan/radin-icon";
AntModal.defaultProps = {
    closable: true,
    maskClosable: true,
    mask: true,
    centered: false,
    footer: null,
    closeIcon: _jsx(CloseRounded, { size: "2xl" }),
    cancelText: "انصراف",
    okText: "تایید"
};
export const Modal = AntModal;
export default Modal;
//# sourceMappingURL=Modal.js.map