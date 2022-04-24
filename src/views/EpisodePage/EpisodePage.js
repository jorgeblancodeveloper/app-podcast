import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import { getSelectedPodcast } from "../../services/utils";
const EpisodePage = ({ podcastList, selectedPodcast }) => {
  let location = useLocation();
  const index = 7;
  console.log(location.pathname);
  //   const id = location.pathname.split("/")[2];
  //   console.log(id)
  React.useEffect(() => {
    console.log("selectedPodcast", selectedPodcast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPodcast]);

  //   const selectedContent = getSelectedPodcast(podcastList,id);
  return (
    <>
      <h1>EpisodePage page</h1>
      <PodcasterCard
          title={selectedPodcast.title.label}
          autor={selectedPodcast["im:artist"].label}
          description={selectedPodcast.summary.label}
          image={selectedPodcast["im:image"][2].label}
        />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedPodcast: state.selectedPodcast,
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {})(EpisodePage);
