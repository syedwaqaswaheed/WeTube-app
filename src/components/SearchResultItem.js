import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { getVideoId, getViewsInUnit } from "../scripts/utility";
import { Avatar } from "@mui/material";
import { AvatarContainer } from "../scripts/utility";

const SearchResultItem = (props) => {
  const video = props.video;

  return (
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
  );
};

export default SearchResultItem;
