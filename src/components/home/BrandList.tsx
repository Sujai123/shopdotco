import { Box, Stack, useTheme } from "@mui/material";
import Versace from "../../assets/images/Versace.svg";
import Zara from "../../assets/images/Zara.png";
import Gucci from "../../assets/images/Gucci.png";
import Prada from "../../assets/images/Prada.png";
import CalvinKlein from "../../assets/images/CalvinKlein.png";

const BrandList = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.common.black} p={2}>
      <Stack
        direction={"row-reverse"}
        alignItems={"center"}
        spacing={"auto"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box>
          <img src={Versace} />
        </Box>
        <Box>
          <img src={Zara} />
        </Box>
        <Box>
          <img src={Gucci} />
        </Box>
        <Box>
          <img src={Prada} />
        </Box>
        <Box>
          <img src={CalvinKlein} />
        </Box>
      </Stack>
    </Box>
  );
};

export default BrandList;
