import getYouTubeID from "get-youtube-id";

export const getVideoId = (video) => {
  const videoLink = video.videoId;

  return getYouTubeID(videoLink);
};
