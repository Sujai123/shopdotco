import {
  Box,
  styled,
  Typography,
  IconButton,
  Stack,
  Slider,
  Button,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoneIcon from "@mui/icons-material/Done";

const StyledSidebar = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 20,
  flex: 0.2,
  padding: "0 15px 10px 20px",
  margin: "0 25px 10px",
}));

const StyledFilter = styled(Stack)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 20,
  padding: "10px 0",
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledHeader = styled(Stack)({
  fontWeight: 700,
  fontSize: 20,
});

const StyledListItems = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 0",
  cursor: "pointer",
});

const StyledText = styled(Typography)(({ selected }) => ({
  fontWeight: selected ? 700 : 400,
}));

const ColorBox = styled(Box)(({ bgColor }) => ({
  padding: 10,
  borderRadius: "50%",
  width: 37,
  height: 37,
  gap: 0,
  cursor: "pointer",
  border: "2px solid #00000033",
  backgroundColor: bgColor,
  svg: {
    fontSize: 20,
    position: "absolute",
    margin: "-2px",
  },
  path: {
    color: "#bdbdbd",
  },
}));

const StyledColorContainer = styled(Box)({
  display: "flex",
  gap: 10,
  paddingBottom: 15,
  justifyContent: "space-between",
});

const StyledExpansion = styled(Accordion)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: "none !important",
  position: "static",
  margin: "0 !important",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledSummary = styled(AccordionSummary)({
  padding: "0 !important",
  minHeight: "55px !important",
  ".Mui-expanded": {
    margin: "0 !important",
  },
});

const StyledLabelGroup = styled(Stack)({
  justifyContent: "flex-start",
  marginBottom: 10,
  gap: 12,
});

const StyledLabel = styled(Box)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : "#000000",
  cursor: "pointer",
  padding: "10px 20px",
  borderRadius: 10,
  fontSize: 14,
  backgroundColor: selected ? theme.palette.background.paper : "#f0f0f0",
  ...(selected && { border: `1px solid ${theme.palette.primary.main}` }),
}));

const filters = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const colorPalatte = [
  ["#00C12B", "#FF0000", "#FFFF00", "#FF681F", "#00FFFF"],
  ["#0080FF", "#8000FF", "#FF00FF", "#FFFFFF", "#000000"],
];

const sizeArray = [
  ["XX-Small", "X-Small"],
  ["Small", "Medium"],
  ["Large", "X-Large"],
  ["XX-Large", "3X-Large"],
  ["4X-Large"],
];

const dressStyles = ["Casual", "Formal", "Party", "Gym"];

const marksArray = (values: number[]) => {
  return values.map((value: number) => {
    return {
      value: value,
      label: `$${value}`,
    };
  });
};

type FilterProps = {
  filterValues: {
    priceRange: number[];
    selectedCategory: string;
    selectedColors: string[];
    selectedSizes: string[];
    selectedStyle: string;
  };
  updateFilterValues: (
    key: string,
    value: string | number[] | string[],
  ) => void;
  handlePriceChange: (event: Event, newValue: number | number[]) => void;
  updateColorSizeFilters: (name: string, value: string) => void;
};

export const Filter: FilterProps = ({
  filterValues,
  updateFilterValues,
  handlePriceChange,
  updateColorSizeFilters,
}) => {
  const {
    priceRange,
    selectedCategory,
    selectedColors,
    selectedSizes,
    selectedStyle,
  } = filterValues;

  return (
    <StyledSidebar>
      <StyledFilter direction="row">
        <Box mt={"5px"}>Filters</Box>
        <IconButton>
          <TuneIcon />
        </IconButton>
      </StyledFilter>
      <Stack py={1.5} spacing={0.5} borderBottom={"1px solid #e0e0e0"}>
        {filters.map((filter) => (
          <StyledListItems
            key={filter}
            onClick={() => updateFilterValues("selectedCategory", filter)}
          >
            <StyledText selected={filter === selectedCategory}>
              {filter}
            </StyledText>
            <KeyboardArrowRightIcon />
          </StyledListItems>
        ))}
      </Stack>
      <StyledExpansion defaultExpanded>
        <StyledSummary expandIcon={<ExpandMoreIcon />}>
          <StyledHeader>Price</StyledHeader>
        </StyledSummary>
        <AccordionDetails sx={{ paddingLeft: 1 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="off"
            marks={marksArray(priceRange)}
            max={500}
            min={50}
            step={100}
          />
        </AccordionDetails>
      </StyledExpansion>
      <StyledExpansion defaultExpanded>
        <StyledSummary expandIcon={<ExpandMoreIcon />}>
          <StyledHeader>Colors</StyledHeader>
        </StyledSummary>
        <AccordionDetails sx={{ paddingLeft: 0 }}>
          {colorPalatte.map((colorArray) => (
            <StyledColorContainer>
              {colorArray.map((color) => (
                <ColorBox
                  key={color}
                  bgColor={color}
                  onClick={() =>
                    updateColorSizeFilters("selectedColors", color)
                  }
                >
                  {selectedColors.includes(color) && <DoneIcon />}
                </ColorBox>
              ))}
            </StyledColorContainer>
          ))}
        </AccordionDetails>
      </StyledExpansion>
      <StyledExpansion defaultExpanded>
        <StyledSummary expandIcon={<ExpandMoreIcon />}>
          <StyledHeader>Size</StyledHeader>
        </StyledSummary>
        <AccordionDetails sx={{ paddingLeft: 0 }}>
          {sizeArray.map((sizeGroups) => (
            <StyledLabelGroup direction={"row"}>
              {sizeGroups.map((size) => (
                <StyledLabel
                  selected={selectedSizes.includes(size)}
                  onClick={() => updateColorSizeFilters("selectedSizes", size)}
                >
                  {size}
                </StyledLabel>
              ))}
            </StyledLabelGroup>
          ))}
        </AccordionDetails>
      </StyledExpansion>
      <StyledExpansion sx={{ border: "none" }} defaultExpanded>
        <StyledSummary expandIcon={<ExpandMoreIcon />}>
          <StyledHeader>Dress Style</StyledHeader>
        </StyledSummary>
        <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
          {dressStyles.map((style) => (
            <StyledListItems
              key={style}
              onClick={() => updateFilterValues("selectedStyle", style)}
            >
              <StyledText selected={style === selectedStyle}>
                {style}
              </StyledText>
              <KeyboardArrowRightIcon />
            </StyledListItems>
          ))}
        </AccordionDetails>
      </StyledExpansion>
      <Box>
        <Button color={"secondary"} variant="contained" sx={{ width: "98%" }}>
          <Typography fontWeight={"bold"}>Apply Filter</Typography>
        </Button>
      </Box>
    </StyledSidebar>
  );
};
