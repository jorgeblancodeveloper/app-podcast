import React from "react";
import { useParams } from "react-router-dom";

import { MediaPlayer } from "../../elements/MediaPlayer/MediaPlayer";
const EpisodePlayer = ({ episodeList }) => {
  let { id } = useParams();

  const getEpisodeInfoFromId = episodeList.filter((el) => el.trackId == id)[0];
  return (
    <div className="episode-player">
      <div className="episode-player__header">
        {getEpisodeInfoFromId?.trackName}
      </div>
      {getEpisodeInfoFromId?.description && (
        <div
          className="episode-player__row"
          dangerouslySetInnerHTML={{
            __html: getEpisodeInfoFromId?.description,
          }}
        />
      )}
      <MediaPlayer path={getEpisodeInfoFromId?.episodeUrl} />
    </div>
  );
};

export default EpisodePlayer;
