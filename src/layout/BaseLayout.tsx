import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import AppNavBar from "../components/layout/AppNavBar";
import Footer from "../components/layout/Footer";
import { useSpring, animated } from "@react-spring/web";
import withFade from "../hocs/withFade";

const FadedHeader = withFade(Header);

const BaseLayout = () => {
  const [props, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  return (
    <div>
      <Header />
      <AppNavBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default BaseLayout;
