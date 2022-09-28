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

export const getViewsInUnit = (views) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(views)) >= 1.0e9
    ? (Math.abs(Number(views)) / 1.0e9).toFixed(2) + " B"
    : // Six Zeroes for Millions
    Math.abs(Number(views)) >= 1.0e6
    ? (Math.abs(Number(views)) / 1.0e6).toFixed(2) + " M"
    : // Three Zeroes for Thousands
    Math.abs(Number(views)) >= 1.0e3
    ? (Math.abs(Number(views)) / 1.0e3).toFixed(2) + " K"
    : Math.abs(Number(views));
};
