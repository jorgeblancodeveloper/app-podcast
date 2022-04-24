import React from "react";
import { millisToMinutesAndSeconds } from "../../services/utils";

const EpisodeList = ({ list, onClickEpisode }) => {
  const [filteredListLength, setFilteredListLength] = React.useState();

  React.useEffect(() => {
    if (list) {
      setFilteredListLength(
        list.map((el, i) => (
          <div
            className="Episode-list__row"
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
    <div className="Episode-list">
      <div className="Episode-list__header">
        {`Episodes: ${list && list.length}`}
      </div>
      <div className="Episode-list__row">
        <div style={{ flex: "1" }}> Title</div>
        <div>Date</div> <div>Duration</div>
      </div>
      {filteredListLength}
    </div>
  );
};

export default EpisodeList;
