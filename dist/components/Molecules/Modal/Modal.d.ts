/// <reference types="react" />
export declare const Modal: import("react").FC<import("antd").ModalProps> & import("antd/lib/modal/confirm").ModalStaticFunctions & {
    useModal: typeof import("antd/lib/modal/useModal").default;
    destroyAll: () => void;
    config: typeof import("antd/lib/modal/confirm").modalGlobalConfig;
};
export default Modal;
