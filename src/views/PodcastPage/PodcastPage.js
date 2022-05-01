import React from "react";
import { connect } from "react-redux";
import { PodcasterCard, EpisodeList, EpisodePlayer } from "../../components";
import { Spinner } from "../../elements";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import {
  addEpisodeList,
  setSelectedPodcast,
  setLoading,
} from "../../services/redux/actions";
import {
  getDifferenceTime,
  getPodcastContent,
  logDebug,
  saveEpisodeListToLocal,
} from "../../services/utils";

const PodcastPage = (props) => {
  const {
    selectedPodcast,
    addEpisodeList,
    episodeList,
    setSelectedPodcast,
    podcastList,
    setLoading,
    isLoading,
  } = props;
  let { id } = useParams();
  let navigate = useNavigate();

  const handleClick = (epId) => {
    navigate(`episode/${epId}`);
  };
  const setImageLoaded = () => {
    setLoading(isLoading.filter((el) => el !== "PodcastPageImage"));
  };
  const updateEpisodelist = async (id) => {
    const episodeInfo = await getEpisodeList(id).then(
      (e) => JSON.parse(e.contents).results
    );
    setLoading(isLoading.filter((el) => el !== "PodcastPage"));
    if (episodeInfo.length === 0) {
      navigate(`/error`);
    }
    const [_, ...rest] = episodeInfo;
    addEpisodeList({ [id]: { list: rest, date: new Date() } });
  };

  React.useEffect(() => {
    saveEpisodeListToLocal(JSON.stringify(episodeList));
  }, [episodeList]);

  React.useEffect(() => {
    if (!selectedPodcast) {
      setSelectedPodcast(getPodcastContent(podcastList, id));
    }

    if (
      !episodeList ||
      !episodeList[id] ||
      getDifferenceTime(episodeList[id]?.date) > 1
    ) {
      logDebug("download episode list from server");
      setLoading([...isLoading, "PodcastPage", "PodcastPageImage"]);
      updateEpisodelist(id);
    } else {
      logDebug("read episode list  from redux");
    }
  }, []);

  return selectedPodcast?.id && episodeList && episodeList[id] ? (
    <div className="podcast-page">
      <PodcasterCard
        id={id}
        title={selectedPodcast["im:name"].label}
        autor={selectedPodcast["im:artist"].label}
        description={selectedPodcast.summary.label}
        image={selectedPodcast["im:image"][2].label}
        setImageLoaded={setImageLoaded}
      />
      <Routes>
        <Route
          path="/"
          element={
            <EpisodeList
              list={episodeList[id].list}
              onClickEpisode={handleClick}
            />
          }
        />
        <Route
          path="episode/:id"
          element={<EpisodePlayer episodeList={episodeList[id].list} />}
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
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {
  addEpisodeList,
  setSelectedPodcast,
  setLoading,
})(PodcastPage);
