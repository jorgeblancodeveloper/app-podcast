import React from "react";
import { millisToMinutesAndSeconds } from "../../services/utils";
import Spinner from "../../elements/Spinner/Spinner";
const EpisodeList = ({ list, onClickEpisode }) => {
  const [episodeList, setEpisodeList] = React.useState();

  React.useEffect(() => {
    if (list) {
      setEpisodeList(
        list.map((el, i) => (
          <div
            className="episode-list__row is-animated"
            key={el + i}
            onClick={() => onClickEpisode(el.trackId)}
          >
            <div> {el.trackName}</div>
            <div>
              {new Date(el.releaseDate).toLocaleString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </div>
            <div>
              {el.trackTimeMillis &&
                millisToMinutesAndSeconds(el.trackTimeMillis)}
            </div>
          </div>
        ))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <div className="episode-list">
      {list.length ? (
        <>
          <div className="episode-list__header">
            {`Episodes: ${list && list.length}`}
          </div>
          <div className="episode-list__table">
            <div className="episode-list__row-header">
              <div style={{ flex: "1" }}> Title</div>
              <div>Date</div>
              <div>Duration</div>
            </div>
            {episodeList}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default EpisodeList;
