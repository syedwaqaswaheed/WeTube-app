import React from "react";
import videoData from "../data/data.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { getVideoId } from "../scripts/utility";
import { Avatar } from "@mui/material";

const ImageList = () => {
  return (
    <Grid container>
      {videoData.map((video, index) => (
        <Box key={index} sx={{ width: 480, marginRight: 0.5, my: 5 }}>
          {video ? (
            <>
              <Link
                to={{
                  pathname: `/playback`,
                  state: { video: video.videoId },
                  search: `?${getVideoId(video)}`,
                }}
              >
                <img
                  src={`/assets/videos/${video.videoThumbnail}`}
                  style={{ width: 450, height: 300, cursor: "pointer" }}
                  alt={video.videoName}
                />
              </Link>
            </>
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {video ? (
            <Box sx={{ p: 2 }} alignItems="start">
              <Typography gutterBottom display="inline-center" variant="title">
                <Avatar
                  alt={video.channelName}
                  src={`/assets/channels/${video.channelThumbnail}`}
                />
                {video.videoName}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {video.channelName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${video.views}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
};

export default ImageList;
