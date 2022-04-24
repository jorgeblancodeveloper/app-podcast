import React from "react";

export const MediaPlayer = ({ path, ...props }) => {
  return (

    <audio controls>
  <source src={path.ogg} type="audio/ogg"/>
  <source src={path.mp3} type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
  );
};
