import { ReactNode } from "react";
import { useInView, animated } from "@react-spring/web";

type SlideUpComponentProps = {
  children: ReactNode;
};

const SlideUpComponent = ({ children }: SlideUpComponentProps) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-2% 0%",
      once: true,
    },
  );
  return (
    <animated.div style={springs} ref={ref}>
      {children}
    </animated.div>
  );
};

export default SlideUpComponent;
