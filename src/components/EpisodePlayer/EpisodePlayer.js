import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaPlayer } from "../../elements/";
const EpisodePlayer = ({ episodeList }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const getEpisodeInfoFromId = episodeList.filter(el => el.trackId == id)[0];
  if (!getEpisodeInfoFromId) {
    navigate(`/error`);
  }
  return (
    <div className="episode-player">
      <div className="episode-player__wrapper">
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
    </div>
  );
};

export default EpisodePlayer;
