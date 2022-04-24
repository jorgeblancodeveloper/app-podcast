import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodePlayer from "../../components/EpisodePlayer/EpisodePlayer";

import { getSelectedPodcast } from "../../services/utils";
const EpisodePage = ({ podcastList, selectedPodcast,episodeList,selectedEpisodeId }) => {
  //   const id = location.pathname.split("/")[2];
  //   console.log(id)
  const getEpisodeInfoFromId=id=>{
    console.log("EEEEE",id,episodeList.filter(el=>el.collectionId==id));
    return episodeList.filter(el=>el.collectionId==id)
  }
  console.log(getEpisodeInfoFromId(selectedEpisodeId))
  React.useEffect(() => {
    console.log("selectedPodcast", selectedPodcast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPodcast]);

  //   const selectedContent = getSelectedPodcast(podcastList,id);
  return (
    <div className="podcast-page">
      <PodcasterCard
        title={selectedPodcast.title.label}
        autor={selectedPodcast["im:artist"].label}
        description={selectedPodcast.summary.label}
        image={selectedPodcast["im:image"][2].label}
      />
      <EpisodePlayer title="Titulo" description="Descrition" path={{mp3:"path"}}/>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedPodcast: state.selectedPodcast,
    podcastList: state.podcastList,
    episodeList:state.episodeList,
    selectedEpisodeId:state.selectedEpisodeId
  };
};
export default connect(mapStateToProps, {})(EpisodePage);
