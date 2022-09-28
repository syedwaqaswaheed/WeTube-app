import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { getVideoId, getViewsInUnit } from "../scripts/utility";
import { Avatar } from "@mui/material";
import { AvatarContainer } from "../scripts/utility";

const ImageItem = (props) => {
  const video = props.video;

  return (
    <Box sx={{ width: 480, marginRight: 0.5, my: 5 }}>
      {video ? (
        <>
          <Link
            to={{
              pathname: `/playback`,
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
        <Box sx={{ p: 2 }}>
          <AvatarContainer>
            <Avatar
              alt={video.channelName}
              src={`/assets/channels/${video.channelThumbnail}`}
            />
            <Typography gutterBottom display="" variant="title">
              {video.videoName}
            </Typography>
          </AvatarContainer>

          <Typography display="block" variant="caption" color="text.secondary">
            {video.channelName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${getViewsInUnit(video.views)} Views`}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      )}
    </Box>
  );
};

export default ImageItem;
