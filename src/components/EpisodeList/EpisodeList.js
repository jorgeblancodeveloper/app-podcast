import React from "react";
import { millisToMinutesAndSeconds } from "../../services/utils";
import { Spinner } from "../../elements/Spinner/Spinner";
const EpisodeList = ({ list, onClickEpisode }) => {
  const [episodeList, setEpisodeList] = React.useState();

  React.useEffect(() => {
    if (list) {
      setEpisodeList(
        list.map((el, i) => (
          <div
            className="episode-list__row"
            key={el + i}
            onClick={() => onClickEpisode(el.trackId)}
          >
            <div style={{ flex: "1" }}> {el.trackName}</div>
            <div>{millisToMinutesAndSeconds(el.trackTimeMillis)}</div>
            {"-"}
            <div>{el.releaseDate}</div>
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
          <div className="episode-list__row">
            <div style={{ flex: "1" }}> Title</div>
            <div>Date</div> <div>Duration</div>
          </div>
          {episodeList}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default EpisodeList;
