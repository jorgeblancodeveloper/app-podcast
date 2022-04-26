import React from "react";

const MediaPlayer = ({ path, ...props }) => {
  return (
    <audio controls {...props}>
      <source src={path} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MediaPlayer;
