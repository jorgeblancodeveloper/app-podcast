import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate } from "react-router-dom";
import {
  setSelectedEpisode,
  setEpisodeList,
} from "../../services/redux/actions/";

const PodcastPage = (props) => {
  const { selectedPodcast, setSelectedEpisode, setEpisodeList, episodeList } =
    props;

  let navigate = useNavigate();

  const handleClick = (epId) => {
    setSelectedEpisode(epId);
    navigate(
      `/podcast/${selectedPodcast.id.attributes["im:id"]}/episode/${epId}`
    );
  };
  const updateEpisodelist = async (id) => {
    const episodeInfo = await getEpisodeList(id);
    setEpisodeList(JSON.parse(episodeInfo.contents).results);
  };

  React.useEffect(() => {
    if (selectedPodcast.id) {
      const podcastId = selectedPodcast.id.attributes["im:id"];
      updateEpisodelist(podcastId);
    }
  }, [selectedPodcast]);

  return selectedPodcast.id ? (
    <div className="podcast-page">
      <PodcasterCard
        title={selectedPodcast.title.label}
        autor={selectedPodcast["im:artist"].label}
        description={selectedPodcast.summary.label}
        image={selectedPodcast["im:image"][2].label}
      />
      <EpisodeList list={episodeList} onClickEpisode={handleClick} />
    </div>
  ) : (
    <h1>Sin datos </h1>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedPodcast: state.selectedPodcast,
    episodeList: state.episodeList,
  };
};
export default connect(mapStateToProps, { setSelectedEpisode, setEpisodeList })(
  PodcastPage
);
