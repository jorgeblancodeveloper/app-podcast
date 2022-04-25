import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import Spinner from "../../elements/Spinner/Spinner";
import EpisodePlayer from "../../components/EpisodePlayer/EpisodePlayer";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import {
  setEpisodeList,
  setSelectedPodcast,
} from "../../services/redux/actions/";
import { getSelectedPodcast } from "../../services/utils";
const PodcastPage = (props) => {
  const {
    selectedPodcast,
    setEpisodeList,
    episodeList,
    setSelectedPodcast,
    podcastList,
  } = props;
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
    const [a, ...rest] = episodeInfo;
    setEpisodeList(rest);
  };

  React.useEffect(() => {
    if (!selectedPodcast) {
      const selectedContent = getSelectedPodcast(podcastList, id);
      setSelectedPodcast(selectedContent);
    }
    updateEpisodelist(id);
  }, []);

  return selectedPodcast?.id ? (
    <div className="podcast-page">
      <PodcasterCard
        id={id}
        title={selectedPodcast["im:name"].label}
        autor={selectedPodcast["im:artist"].label}
        description={selectedPodcast.summary.label}
        image={selectedPodcast["im:image"][2].label}
      />
      <Routes>
        <Route
          path="/"
          element={
            <EpisodeList list={episodeList} onClickEpisode={handleClick} />
          }
        />
        <Route
          path="episode/:id"
          element={<EpisodePlayer episodeList={episodeList} />}
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
export default connect(mapStateToProps, { setEpisodeList, setSelectedPodcast })(
  PodcastPage
);
