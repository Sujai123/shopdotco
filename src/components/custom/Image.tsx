import { styled } from "@mui/material";
import images from "../../constants/images";

type ImageProps = {
  iconType: keyof typeof images;
};

const StyledImage = styled("img")`
  max-width: 100%;
  display: block;
`;

const Image = (props: ImageProps) => {
  const { iconType } = props;
  return <StyledImage src={images[iconType]} alt={iconType} />;
};

export default Image;
