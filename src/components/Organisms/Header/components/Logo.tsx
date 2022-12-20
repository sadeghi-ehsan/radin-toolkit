import React, { forwardRef } from "react";
import { Icon, IconProps } from "radin-icon";

const ExamSvg = forwardRef<SVGElement, IconProps>(({ fill, ...restProps }, ref) => (
  <svg
    id="Group_1983"
    data-name="Group 1983"
    xmlns="http://www.w3.org/2000/svg"
    width="22.493"
    height="32"
    viewBox="0 0 22.493 32"
    {...restProps}
    // @ts-ignore
    ref={ref}
  >
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_847" data-name="Rectangle 847" width="22.493" height="32" fill="none" />
      </clipPath>
      <clipPath id="clip-path-3">
        <rect id="Rectangle_842" data-name="Rectangle 842" width="7.879" height="22.848" fill="#0a84ff" />
      </clipPath>
      <clipPath id="clip-path-4">
        <rect id="Rectangle_843" data-name="Rectangle 843" width="14.969" height="14.969" fill="#0a84ff" />
      </clipPath>
      <clipPath id="clip-path-5">
        <rect id="Rectangle_844" data-name="Rectangle 844" width="7.498" height="7.498" fill="#0a84ff" />
      </clipPath>
      <clipPath id="clip-path-6">
        <rect id="Rectangle_845" data-name="Rectangle 845" width="22.848" height="7.879" fill="none" />
      </clipPath>
    </defs>
    <g id="Group_1982" data-name="Group 1982" clipPath="url(#clip-path)">
      <g id="Group_1981" data-name="Group 1981" transform="translate(0 0)">
        <g id="Group_1980" data-name="Group 1980" clipPath="url(#clip-path)">
          <g id="Group_1970" data-name="Group 1970" transform="translate(-0.356 -0.302)" opacity="0.7">
            <g id="Group_1969" data-name="Group 1969" transform="translate(0 0)">
              <g id="Group_1968" data-name="Group 1968" clipPath="url(#clip-path-3)">
                <path
                  id="Path_380"
                  data-name="Path 380"
                  d="M0,22.493H0V7.5A7.5,7.5,0,0,1,7.5,0V15a7.5,7.5,0,0,1-7.5,7.5"
                  transform="translate(0.356 0.302)"
                  fill="#0a84ff"
                />
              </g>
            </g>
          </g>
          <g id="Group_1973" data-name="Group 1973" transform="translate(-0.356 7.577)" opacity="0.7">
            <g id="Group_1972" data-name="Group 1972" transform="translate(0 0)">
              <g id="Group_1971" data-name="Group 1971" clipPath="url(#clip-path-4)">
                <path
                  id="Path_381"
                  data-name="Path 381"
                  d="M7.5,35H0V27.5A7.5,7.5,0,0,1,7.5,20H15v7.5A7.5,7.5,0,0,1,7.5,35"
                  transform="translate(0.356 -20.079)"
                  fill="#0a84ff"
                />
              </g>
            </g>
          </g>
          <g id="Group_1976" data-name="Group 1976" transform="translate(0 24.503)" opacity="0.73">
            <g id="Group_1975" data-name="Group 1975">
              <g id="Group_1974" data-name="Group 1974" clipPath="url(#clip-path-5)">
                <path
                  id="Path_382"
                  data-name="Path 382"
                  d="M3.749,72.859H7.5V69.111a3.749,3.749,0,0,0-3.749-3.749H0v3.749a3.749,3.749,0,0,0,3.749,3.749"
                  transform="translate(0 -65.362)"
                  fill="#0a84ff"
                />
              </g>
            </g>
          </g>
          <g id="Group_1979" data-name="Group 1979" transform="translate(-0.356 14.667)" opacity="0.7">
            <g id="Group_1978" data-name="Group 1978" transform="translate(0 0)">
              <g id="Group_1977" data-name="Group 1977" clipPath="url(#clip-path-6)">
                <path
                  id="Path_383"
                  data-name="Path 383"
                  d="M15,47.5H0A7.5,7.5,0,0,1,7.5,40h15A7.5,7.5,0,0,1,15,47.5"
                  transform="translate(0.356 -39.672)"
                  fill="#0a84ff"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
));

const LogoRadin = (props: IconProps) => <Icon as={ExamSvg} {...props} />;

export default LogoRadin;
