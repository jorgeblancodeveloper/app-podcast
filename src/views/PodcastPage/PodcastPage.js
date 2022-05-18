import React from "react";
import { connect } from "react-redux";
import { PodcasterCard, EpisodeList, EpisodePlayer } from "../../components";
import { Spinner } from "../../elements";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import {
  addEpisodeList,
  setSelectedPodcast,
} from "../../services/redux/actions";
import {
  getDifferenceTime,
  getPodcastContent,
  logDebug,
  saveEpisodeListToLocal,
} from "../../services/utils";

const PodcastPage = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const handleClick = (epId) => {
    navigate(`episode/${epId}`);
  };

  const updateEpisodelist = async (id) => {
    const episodeInfo = await getEpisodeList(id).then(
      (e) => JSON.parse(e.contents).results
    );
    if (episodeInfo.length === 0) {
      navigate(`/error`);
    }
    const [_, ...rest] = episodeInfo;
    props.addEpisodeList({ [id]: { list: rest, date: new Date() } });
  };

  React.useEffect(() => {
    saveEpisodeListToLocal(JSON.stringify(props.episodeList));
  }, [props.episodeList]);

  React.useEffect(() => {
    if (!props.selectedPodcast) {
      props.setSelectedPodcast(getPodcastContent(props.podcastList, id));
    }

    if (
      !props.episodeList ||
      !props.episodeList[id] ||
      getDifferenceTime(props.episodeList[id]?.date) > 1
    ) {
      logDebug("Download episode list from server");
      updateEpisodelist(id);
    } else {
      logDebug("Read episode list  from redux");
    }
  }, []);

  return props.selectedPodcast?.id &&
    props.episodeList &&
    props.episodeList[id] ? (
    <div className="podcast-page">
      <PodcasterCard
        id={id}
        title={props.selectedPodcast["im:name"].label}
        autor={props.selectedPodcast["im:artist"].label}
        description={props.selectedPodcast.summary.label}
        image={props.selectedPodcast["im:image"][2].label}
      />
      <Routes>
        <Route
          path="/"
          element={
            <EpisodeList
              list={props.episodeList[id].list}
              onClickEpisode={handleClick}
            />
          }
        />
        <Route
          path="episode/:id"
          element={<EpisodePlayer episodeList={props.episodeList[id].list} />}
        />
      </Routes>
    </div>
  ) : (
    <Spinner />
  );
};
const mapStateToProps = (state) => {
  return {
    selectedPodcast: state.selectedPodcast,
    episodeList: state.episodeList,
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {
  addEpisodeList,
  setSelectedPodcast,
})(PodcastPage);
