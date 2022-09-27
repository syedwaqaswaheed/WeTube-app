import React from "react";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";

const SearchResult = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <h1>Search Page!!!</h1>
    </Box>
  );
};

export default SearchResult;
