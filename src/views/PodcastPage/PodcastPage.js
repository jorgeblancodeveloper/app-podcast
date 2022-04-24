import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setSelectedEpisode,
  setEpisodeList,
} from "../../services/redux/actions/";

const PodcastPage = (props) => {
  const {
    podcastList,
    selectedPodcast,
    setSelectedEpisode,
    setEpisodeList,
    episodeList,
  } = props;

  let navigate = useNavigate();

  const podcastId = selectedPodcast.id.attributes["im:id"];
  const handleClick = (epId) => {
    setSelectedEpisode(epId);
    navigate(`/podcast/${podcastId}/episode/${epId}`);
  };
  const updateEpisodelist = async () => {
    const episodeInfo = await getEpisodeList(podcastId);
    console.log(JSON.parse(episodeInfo.contents).results);
    setEpisodeList(JSON.parse(episodeInfo.contents).results);
  };

  React.useEffect(() => {
    updateEpisodelist();
  }, []);

  return (
    selectedPodcast && (
      <div className="podcast-page">
        <PodcasterCard
          title={selectedPodcast.title.label}
          autor={selectedPodcast["im:artist"].label}
          description={selectedPodcast.summary.label}
          image={selectedPodcast["im:image"][2].label}
        />
        <EpisodeList list={episodeList} onClickEpisode={handleClick} />
      </div>
    )
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
    selectedPodcast: state.selectedPodcast,
    episodeList: state.episodeList,
  };
};
export default connect(mapStateToProps, { setSelectedEpisode, setEpisodeList })(
  PodcastPage
);
