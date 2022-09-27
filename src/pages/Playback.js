import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Playback = (props) => {
  const params = useParams();

  console.log(params);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    props.videoId && (
      <YouTube videoId={props.videoId} opts={opts} onReady={this._onReady} />
    )
  );
};

export default Playback;
