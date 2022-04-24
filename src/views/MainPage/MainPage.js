import React from "react";
import { connect } from "react-redux";
import PodcastThumb from "../../components/PodcastThumb/PodcastThumb";
import {getSelectedPodcast} from "../../services/utils";
import {setSelectedPodcast} from "../../services/redux/actions/";
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

const MainPage = ({ podcastList, filteredList,setSelectedPodcast }) => {
    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = id=>{
       const selectedContent = getSelectedPodcast(podcastList,id);
        setSelectedPodcast(selectedContent);
        navigate(`/podcast/${id}`);
    }
  const thumbList =
    filteredList.length &&
    filteredList.map((e, i) => {
      const delay = i * 0.03;
      return (
        <PodcastThumb
        onClick={()=>handleClick(e.id.attributes["im:id"])}
          key={e.title.label + i}
          title={e.title.label}
          autor={e["im:artist"].label}
          image={e["im:image"][2].label}
          style={{ animationDelay: `${delay}s` }}
        />
      );
    });
  return (
    <div>

      <h1>Main page</h1>
      <div className="podcast-list">{thumbList}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
    filteredList: state.filteredList,
  };
};
export default connect(mapStateToProps, {setSelectedPodcast})(MainPage);
