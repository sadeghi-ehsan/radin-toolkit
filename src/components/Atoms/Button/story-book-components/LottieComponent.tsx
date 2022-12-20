import React, { FunctionComponent } from "react";
import Lottie from "react-lottie";
import { ILottieComponentProps } from "./types";

const LottieComponent: FunctionComponent<ILottieComponentProps> = ({ animationFile }) => (
  <Lottie
    width={26}
    height={26}
    speed={1}
    style={{
      cursor: "default",
      margin: "0px",
      justifyContent: "flex-start"
    }}
    options={{
      loop: true,
      autoplay: true,
      animationData: animationFile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    isClickToPauseDisabled
  />
);

export default LottieComponent;
