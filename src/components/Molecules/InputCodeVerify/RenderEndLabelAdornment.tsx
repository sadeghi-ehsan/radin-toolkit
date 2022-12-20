import React from "react";
import { Refresh, Time } from "radin-icon";
import { Button } from "../../Atoms/Button";
import { empty, isCallable } from "../../../utils";
import { Loading } from "../../Atoms/Loading";

const RenderEndLabelAdornment = ({ isLoading, disabled, onResend, handleResend, counter, resendBtnText }) => {
  if (isLoading) {
    return (
      <div className="-mt-10">
        <Loading className="w-5 h-5" />
      </div>
    );
  }

  if (disabled || empty(onResend) || !isCallable(onResend)) {
    return null;
  }

  const minutes = Math.floor(counter / 60);
  const remainingSeconds = counter % 60;

  return (
    <div className="-mt-12">
      {counter === 0 ? (
        <Button
          className="mt-1 -ml-2 group"
          onClick={handleResend}
          shape="round"
          startIcon={<Refresh color="current" className="self-center !text-success group-hover:!text-error" />}
          theme="error"
          variant="text"
          size="sm"
        >
          {resendBtnText}
        </Button>
      ) : (
        <div className="flex items-center py-2 space-x-2 space-x-reverse">
          <Time color="white" />
          <div>{`${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`}</div>
        </div>
      )}
    </div>
  );
};

export default RenderEndLabelAdornment;
