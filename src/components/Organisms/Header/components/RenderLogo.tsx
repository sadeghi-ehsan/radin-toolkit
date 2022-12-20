import React, { ReactElement } from "react";
import LogoRadin from "./Logo";

const RenderLogo = ({ logo, brandName }: { logo?: ReactElement; brandName: string }) => (
  <div className="flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
    <div className="shrink-0">{logo || <LogoRadin className="h-4 w-max md:h-8 md:w-max" />}</div>
    <div className="font-heavy text-xs whitespace-nowrap shrink-0 md:text-lg">{brandName}</div>
  </div>
);

export default RenderLogo;
