import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Refresh, Time } from "@sadeghi-ehsan/radin-icon";
import { Button } from "../../Atoms/Button";
import { empty, isCallable } from "../../../utils";
import { Loading } from "../../Atoms/Loading";
const RenderEndLabelAdornment = ({ isLoading, disabled, onResend, handleResend, counter, resendBtnText }) => {
    if (isLoading) {
        return (_jsx("div", { className: "-mt-10", children: _jsx(Loading, { className: "w-5 h-5" }) }));
    }
    if (disabled || empty(onResend) || !isCallable(onResend)) {
        return null;
    }
    const minutes = Math.floor(counter / 60);
    const remainingSeconds = counter % 60;
    return (_jsx("div", { className: "-mt-12", children: counter === 0 ? (_jsx(Button, { className: "mt-1 -ml-2 group", onClick: handleResend, shape: "round", startIcon: _jsx(Refresh, { color: "current", className: "self-center !text-success group-hover:!text-error" }), theme: "error", variant: "text", size: "sm", children: resendBtnText })) : (_jsxs("div", { className: "flex items-center py-2 space-x-2 space-x-reverse", children: [_jsx(Time, { color: "white" }), _jsx("div", { children: `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}` })] })) }));
};
export default RenderEndLabelAdornment;
//# sourceMappingURL=RenderEndLabelAdornment.js.map