import React from "react";
import { millisToMinutesAndSeconds } from "../../services/utils";
import { MediaPlayer } from "../../elements/MediaPlayer/MediaPlayer";
const EpisodePlayer = ({ title, description, path }) => {
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="episode-player">
      <div className="episode-player__header"> {title}</div>
      {description && (
        <div
          className="episode-player__row"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <MediaPlayer path={path} />
    </div>
  );
};

export default EpisodePlayer;
