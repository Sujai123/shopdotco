import images from "../../constants/images";

type ImageProps = {
  iconType: keyof typeof images
}

const Image = (props: ImageProps) => {
  const { iconType } = props;
  return <img src={images[iconType]} alt={iconType} />;
};

export default Image;
