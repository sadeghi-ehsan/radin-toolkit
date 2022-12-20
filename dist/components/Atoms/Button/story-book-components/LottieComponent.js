import { jsx as _jsx } from "react/jsx-runtime";
import Lottie from "react-lottie";
const LottieComponent = ({ animationFile }) => (_jsx(Lottie, { width: 26, height: 26, speed: 1, style: {
        cursor: "default",
        margin: "0px",
        justifyContent: "flex-start"
    }, options: {
        loop: true,
        autoplay: true,
        animationData: animationFile,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }, isClickToPauseDisabled: true }));
export default LottieComponent;
//# sourceMappingURL=LottieComponent.js.map