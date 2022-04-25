import React from "react";
import { connect } from "react-redux";
import PodcastThumb from "../../components/PodcastThumb/PodcastThumb";
import { getSelectedPodcast } from "../../services/utils";
import {
  setSelectedPodcast,
  setFilteredList,
} from "../../services/redux/actions/";
import { useNavigate } from "react-router-dom";
import { FilterModule } from "../../components/FilterModule/FilterModule";

const MainPage = ({
  podcastList,
  filteredList,
  setSelectedPodcast,
  setFilteredList,
}) => {
  const [thumbList, setThumbList] = React.useState([]);
  let navigate = useNavigate();

  const goPodcast = (id) => {
    const selectedContent = getSelectedPodcast(podcastList, id);
    setSelectedPodcast(selectedContent);
    navigate(`/podcast/${id}`);
  };

  const handleFilterList = (filteredData) => {
    setFilteredList(filteredData);
  };


  React.useEffect(() => {
    setThumbList(
      filteredList.length
        ? filteredList.map((e, i) => {
            const delay = i < 10 ? 0.1 + i * 0.1 : 1.1;
            return (
              <PodcastThumb
                onClick={() => goPodcast(e.id.attributes["im:id"])}
                key={e.title.label + i}
                title={e["im:name"].label}
                autor={e["im:artist"].label}
                image={e["im:image"][2].label}
                style={{ animationDelay: `${delay}s` }}
              />
            );
          })
        : (<div>No podcasts finded...</div>)
    );
  }, [filteredList]);

  return (
    <>
      {podcastList?.feed?.entry.length && (
        <FilterModule
          list={podcastList?.feed?.entry}
          setFiltered={handleFilterList}
        />
      )}
      <div className="podcast-list__wrapper">
        <div className="podcast-list">{thumbList}</div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
    filteredList: state.filteredList,
  };
};
export default connect(mapStateToProps, {
  setSelectedPodcast,
  setFilteredList,
})(MainPage);
