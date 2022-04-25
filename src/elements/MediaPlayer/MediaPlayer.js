import React from "react";

export const MediaPlayer = ({ path, ...props }) => {
  return (
    <audio controls {...props}>
      <source src={path} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};
