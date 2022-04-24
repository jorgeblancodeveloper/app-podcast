import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import getEpisodeList from "../../services/api/getEpisodeList";
import { useNavigate, useLocation } from "react-router-dom";
import {setSelectedEpisode} from "../../services/redux/actions/";
import {getSelectedPodcast} from "../../services/utils";
const PodcastPage = (props) => {
    const { podcastList, selectedPodcast,setSelectedEpisode} = props;
  let location = useLocation();
  let navigate = useNavigate();
  const [episodeList, setEpisodeList] = React.useState();
  const podcastId= selectedPodcast.id.attributes["im:id"]
//   const id = location.pathname.split("/").pop();
//   const selectedContent = getSelectedPodcast(podcastList,id);
  const handleClick = (epId) => {
    setSelectedEpisode(epId)
    navigate(`/podcast/${podcastId}/episode/${epId}`);
  };
const updateEpisodelist = async () => {
    
    const episodeInfo = await getEpisodeList(podcastId);
    setEpisodeList(JSON.parse(episodeInfo.contents).results);
}
  
  React.useEffect( () => {
    updateEpisodelist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    selectedPodcast: state.selectedPodcast
  };
};
export default connect(mapStateToProps, {setSelectedEpisode})(PodcastPage);
