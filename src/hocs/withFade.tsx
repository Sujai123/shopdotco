import React from "react";
import { useSpring, animated } from "@react-spring/web";

const withFade = (WrappedComponent) => (props) => {
  const [sprintProps, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  return (
    <animated.div style={sprintProps}>
      <WrappedComponent {...props} />
    </animated.div>
  );
};

export default withFade;
