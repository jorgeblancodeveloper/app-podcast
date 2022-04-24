import React from "react";
import { millisToMinutesAndSeconds } from "../../services/utils";
import { MediaPlayer } from "../../elements/MediaPlayer/MediaPlayer";
const EpisodePlayer = ({ title, description, path }) => {
  const [filteredListLength, setFilteredListLength] = React.useState();

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="episode-player">
      <div className="episode-player__header"> {title}</div>
      <div className="episode-player__row"> {description}</div>
      <MediaPlayer path={path.mp3} />
    </div>
  );
};

export default EpisodePlayer;
