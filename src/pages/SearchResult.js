import React from "react";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Layout";
import { useLocation } from "react-router-dom";
import videoData from "../data/data.json";
import { getVideoId } from "../scripts/utility";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const SearchResult = () => {
  const location = useLocation();
  const searchQuery = location
    ? location.search.split("?")[1].split("=")[1]
    : "";

  console.log(searchQuery);

  const searchResults = videoData.filter((video) =>
    video.videoName.includes(searchQuery)
  );

  console.log(searchResults);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {videoData
        .filter((video) => video.videoName.includes(searchQuery))
        .map((filteredVideo, index) => (
          <Box
            sx={{
              width: 480,
              marginRight: 0.5,
              my: 5,
            }}
          >
            <Link
              to={{
                pathname: `/playback`,
                state: { video: filteredVideo.videoId },
                search: `?${getVideoId(filteredVideo)}`,
              }}
            >
              <img
                src={`/assets/videos/${filteredVideo.videoThumbnail}`}
                style={{ width: 450, height: 300, cursor: "pointer" }}
                alt={filteredVideo.videoName}
              />
            </Link>
            <Typography gutterBottom display="inline-center" variant="title">
              <Avatar
                alt={filteredVideo.channelName}
                src={`/assets/channels/${filteredVideo.channelThumbnail}`}
              />
              {filteredVideo.videoName}
            </Typography>
            <Typography
              display="block"
              variant="caption"
              color="text.secondary"
            >
              {filteredVideo.channelName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {`${filteredVideo.views}`}
            </Typography>
          </Box>
          // <div>
          //   <h1>{filteredVideo.videoId}</h1>
          //   {/* <SearchResultItem video={filteredVideo} /> */}
          // </div>
        ))}
    </Box>
  );
};

export default SearchResult;
