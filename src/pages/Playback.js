import React from "react";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Playback = () => {
  const location = useLocation();

  const videoId = location ? location.search.split("?")[1] : "";

  console.log(location);

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
      <Divider></Divider>
      {/* <Typography>{video.videoName}</Typography>
      <Typography display="block" variant="caption" color="text.secondary">
        {video.channelName}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {`${video.views}`}
      </Typography> */}
    </Box>
  );
};

export default Playback;
