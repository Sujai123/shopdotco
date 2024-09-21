import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadedComponent = ({ children }) => {
  const [springProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  return <animated.div style={springProps}>{children}</animated.div>;
};

export default FadedComponent;
