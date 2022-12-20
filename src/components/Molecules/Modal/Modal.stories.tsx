import { ComponentMeta, ComponentStory } from "@storybook/react";
// import { Modal } from ".";
import { Modal, ModalProps } from "antd";

import useState from "storybook-addon-state";
import { Button } from "../../Atoms/Button";
import { InputBankCard } from "../InputBankCard";
import { InputSheba } from "../InputSheba";
import { Input } from "../Input";
import { Lock } from "radin-icon";
import { Calendar, CloseRounded, RoundedSquare } from "radin-icon";

import Draggable from "react-draggable";
import { useRef } from "react";

export default {
  component: Modal,
  title: "components/Molecules/Modal"
} as ComponentMeta<typeof Modal>;

const SimpleTemplate: ComponentStory<typeof Modal> = (args: any) => {
  const [isModalVisible, setIsModalVisible] = useState("showModal", false);

  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/id/1073/1000/1000)",
        backgroundSize: "cover",
        width: "100vh",
        height: "100vh"
      }}
      className="flex items-center justify-center"
    >
      <Modal
        {...args}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
          <Button
            className="p-4"
            onClick={() => {
              setIsModalVisible(false);
            }}
          >
            ثبت نهایی
          </Button>
        }
        width={500}
      >
        <>
          <Input label="نام" block={false} preserveErrorBox />
          <InputSheba label="شماره شبا" block={false} preserveErrorBox />
          <InputBankCard label="شماره کارت" name="input" onChange={() => {}} placeholder="" />
        </>
      </Modal>

      <Button
        className="p-4"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Open modal
      </Button>
    </div>
  );
};

const confirmModalTemplate: ComponentStory<typeof Modal> = (args: any) => {
  const [isModalVisible, setIsModalVisible] = useState("showModal", false);

  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/id/1073/1000/1000)",
        backgroundSize: "cover",
        width: "100vh",
        height: "100vh"
      }}
      className="flex items-center justify-center"
    >
      <Button
        className="p-4"
        onClick={() => {
          Modal.confirm({
            title: "حذف شاخص",
            icon: (
              <div className="relative mx-auto mb-6 block w-fit">
                <RoundedSquare weight="fill" size="4.1xl" color="idle" className="opacity-30" />
                <CloseRounded
                  size="1.4xl"
                  color="white"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                />
              </div>
            ),
            content: "آیا از حذف این شاخص مطمئن هستید؟",
            okText: "تایید",
            cancelText: "انصراف",
            width: 320,
            okType: "danger"
          });
        }}
      >
        Open modal
      </Button>
    </div>
  );
};

const draggableModalTemplate: ComponentStory<typeof Modal> = (args: any) => {
  const [visible, setVisible] = useState("visible", false);
  const [disabled, setDisabled] = useState("disable", false);
  const [bounds, setBounds] = useState("bound", {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  const draggleRef = useRef(null);

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();

    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/id/1073/1000/1000)",
        backgroundSize: "cover",
        width: "100vh",
        height: "100vh"
      }}
      className="flex items-center justify-center"
    >
      <Modal
        {...args}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        title={
          <div
            className="flex items-center space-x-2 space-x-reverse cursor-move"
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}} // end
          >
            مودال با قابلیت حرکت
          </div>
        }
        footer={
          <Button
            className="p-4"
            onClick={() => {
              setVisible(false);
            }}
          >
            ثبت نهایی
          </Button>
        }
        modalRender={modal => (
          <Draggable disabled={disabled} bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <>
          <Input label="نام" block={false} preserveErrorBox />
          <InputSheba label="شماره شبا" block={false} preserveErrorBox />
          <InputBankCard label="شماره کارت" name="input" onChange={() => {}} placeholder="" />
        </>
      </Modal>
      <Button
        className="p-4"
        onClick={() => {
          setVisible(true);
        }}
      >
        Draggable Modal
      </Button>
    </div>
  );
};

export const Default = SimpleTemplate.bind({});
Default.args = {
  ...Modal.defaultProps,
  title: "مودال نمونه"
} as ModalProps;

export const CustomTitle = SimpleTemplate.bind({});
CustomTitle.args = {
  ...Default.args,
  title: (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Lock color="primary" />
      <span>مودال نمونه</span>
    </div>
  )
} as ModalProps;

export const ConfirmModal = confirmModalTemplate.bind({});
CustomTitle.args = {
  ...Default.args,

  title: (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Lock color="primary" />
      <span>مودال نمونه</span>
    </div>
  )
} as ModalProps;

export const DraggableModal = draggableModalTemplate.bind({});
DraggableModal.args = {
  ...Default.props
};
