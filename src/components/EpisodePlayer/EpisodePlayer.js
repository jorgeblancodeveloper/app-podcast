import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MediaPlayer } from "../../elements/";
const EpisodePlayer = ({ episodeList }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const getEpisodeInfoFromId = episodeList.filter((el) => el.trackId == id)[0];
  React.useEffect(() => {
    var element = document.querySelector(".episode-player");
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
