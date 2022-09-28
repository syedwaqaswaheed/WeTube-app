import React from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";

const Playback = () => {
  const location = useLocation();

  const videoId = location ? location.search.split("?")[1] : "";

  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Box component="main" sx={{ flexGrow: 0, p: 1 }}>
      <DrawerHeader />
      {videoId && <YouTube videoId={videoId} opts={opts} />}
    </Box>
  );
};

export default Playback;
