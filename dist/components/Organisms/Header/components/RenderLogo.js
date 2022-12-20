import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LogoRadin from "./Logo";
const RenderLogo = ({ logo, brandName }) => (_jsxs("div", { className: "flex items-center space-x-1 rtl:space-x-reverse md:space-x-2", children: [_jsx("div", { className: "shrink-0", children: logo || _jsx(LogoRadin, { className: "h-4 w-max md:h-8 md:w-max" }) }), _jsx("div", { className: "font-heavy text-xs whitespace-nowrap shrink-0 md:text-lg", children: brandName })] }));
export default RenderLogo;
//# sourceMappingURL=RenderLogo.js.map