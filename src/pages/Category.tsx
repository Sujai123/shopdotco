import { useState } from "react";
import { Box } from "@mui/material";
import { Filter } from "../components/category/Filter";

type FilterValuesType = {
  selectedCategory: string;
  priceRange: number[];
  selectedColors: string[];
  selectedSizes: string[];
  selectedStyle: string;
};

const initialState: FilterValuesType = {
  selectedCategory: "",
  priceRange: [50, 200],
  selectedColors: [],
  selectedSizes: [],
  selectedStyle: "",
};

const Category = () => {
  const [filterValues, setFilterValues] = useState(initialState);

  const updateFilterValues = (
    key: string,
    value: string | number[] | string[],
  ) => {
    setFilterValues((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    updateFilterValues("priceRange", newValue as number[]);
  };

  const updateColorSizeFilters = (name: string, value: string) => {
    const updatedValues = filterValues[name].includes(value)
      ? filterValues[name].filter((c: string) => c !== value)
      : [...filterValues[name], value];
    updateFilterValues(name, updatedValues);
  };

  return (
    <>
      <Box display="flex">
        <Filter
          filterValues={filterValues}
          updateFilterValues={updateFilterValues}
          handlePriceChange={handlePriceChange}
          updateColorSizeFilters={updateColorSizeFilters}
        />
        <Box>Category</Box>
      </Box>
    </>
  );
};

export default Category;
