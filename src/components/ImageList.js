import React from "react";
import videoData from "../data/data.json";
import Grid from "@mui/material/Grid";
import ImageItem from "./ImageItem";

const ImageList = () => {
  return (
    <Grid container>
      {videoData.map((video, index) => (
        <ImageItem key={index} video={video}></ImageItem>
      ))}
    </Grid>
  );
};

export default ImageList;
