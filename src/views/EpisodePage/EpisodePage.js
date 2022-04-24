import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodePlayer from "../../components/EpisodePlayer/EpisodePlayer";

const EpisodePage = ({
  selectedPodcast,
  episodeList,
  selectedEpisodeId,
}) => {
  const getEpisodeInfoFromId = episodeList.filter(
    (el) => el.trackId == selectedEpisodeId
  )[0];
  return (
    <div className="podcast-page">
      <PodcasterCard
        title={selectedPodcast.title.label}
        autor={selectedPodcast["im:artist"].label}
        description={selectedPodcast.summary.label}
        image={selectedPodcast["im:image"][2].label}
      />
      <EpisodePlayer
        title={getEpisodeInfoFromId.trackName}
        description={getEpisodeInfoFromId.description}
        path={getEpisodeInfoFromId.episodeUrl}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedPodcast: state.selectedPodcast,
    episodeList: state.episodeList,
    selectedEpisodeId: state.selectedEpisodeId,
  };
};
export default connect(mapStateToProps, {})(EpisodePage);
