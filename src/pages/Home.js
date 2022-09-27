import React from "react";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";
import ImageList from "../components/ImageList";

const Home = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <ImageList />
    </Box>
  );
};

export default Home;
