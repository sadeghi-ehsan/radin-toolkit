import { jsx as _jsx } from "react/jsx-runtime";
import { classJoin } from "../../../utils";
import { colors } from "../../../constants/tailwind";
const Loading = ({ color, className }) => (_jsx("div", { className: classJoin([
        "loading-spinner1",
        !className?.includes("w-") ? "w-10" : "",
        !className?.includes("h-") ? "h-10" : "",
        className
    ]), children: _jsx("div", { className: "loader", children: _jsx("svg", { className: "circular", viewBox: "25 25 50 50", children: _jsx("circle", { className: "path", cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: "6", strokeMiterlimit: "10", stroke: colors[color] }) }) }) }));
Loading.defaultProps = { color: "white" };
export default Loading;
//# sourceMappingURL=Loading.js.map