import * as React from "react";
import videoData from "../data/data.json";
import getYouTubeID from "get-youtube-id";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

const ImageList = () => {
  const getVideoId = (video) => {
    const videoLink = video.videoId;

    return getYouTubeID(videoLink);
  };

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
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom display="inline-center" variant="title">
                <img
                  style={{
                    width: 50,
                    height: 50,
                    border: "1px solid black",
                    borderRadius: "50%",
                    margin: "1px",
                  }}
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
