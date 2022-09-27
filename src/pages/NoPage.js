import React from "react";
import { DrawerHeader } from "./Layout";
import Box from "@mui/material/Box";

const NoPage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <h1>Page Not Found!!!</h1>
    </Box>
  );
};

export default NoPage;
