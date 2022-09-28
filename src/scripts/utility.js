import getYouTubeID from "get-youtube-id";
import styled from "styled-components";

export const getVideoId = (video) => {
  const videoLink = video.videoId;

  return getYouTubeID(videoLink);
};

export const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;
