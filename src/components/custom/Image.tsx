import React from "react";
import visaSVG from "../../assets/images/visa.svg";
import masterSVG from "../../assets/images/master.svg";
import paypalSVG from "../../assets/images/paypal.svg";
import applepaySVG from "../../assets/images/applypay.svg";
import gpaySVG from "../../assets/images/gpay.svg";

const IMAGES = {
  visa: visaSVG,
  master: masterSVG,
  paypal: paypalSVG,
  applepay: applepaySVG,
  gpay: gpaySVG,
};

const Image = ({ iconType, alt }) => {
  return <img src={IMAGES[iconType]} />;
};

export default Image;
