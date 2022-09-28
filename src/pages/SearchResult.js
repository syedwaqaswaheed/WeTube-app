import React from "react";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";
import { useLocation } from "react-router-dom";
import videoData from "../data/data.json";

import SearchResultItem from "../components/SearchResultItem";

const SearchResult = () => {
  const location = useLocation();
  const searchQuery = location
    ? location.search.split("?")[1].split("=")[1]
    : "";

  return (
    <Box component="main" sx={{ flexGrow: 0, p: 3 }}>
      <DrawerHeader />
      {videoData
        .filter((video) => video.videoName.includes(searchQuery))
        .map((filteredVideo, index) => (
          <SearchResultItem
            key={index}
            video={filteredVideo}
          ></SearchResultItem>
        ))}
    </Box>
  );
};

export default SearchResult;
