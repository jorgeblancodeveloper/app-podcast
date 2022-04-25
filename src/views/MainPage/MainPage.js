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
  let navigate = useNavigate();

  const handleClick = (id) => {
    const selectedContent = getSelectedPodcast(podcastList, id);
    setSelectedPodcast(selectedContent);
    navigate(`/podcast/${id}`);
  };
  const handleFilteredList = (filteredData) => {
    setFilteredList(filteredData);
  };
  const [thumbList, setThumbList] = React.useState([]);

  React.useEffect(() => {
    setThumbList(
      filteredList.length
        ? filteredList.map((e, i) => {
            const delay = i < 10 ? 0.1 + i * 0.1 : 1.1;
            return (
              <PodcastThumb
                onClick={() => handleClick(e.id.attributes["im:id"])}
                key={e.title.label + i}
                title={e["im:image"].label}
                autor={e["im:artist"].label}
                image={e["im:image"][2].label}
                style={{ animationDelay: `${delay}s` }}
              />
            );
          })
        : ""
    );
  }, [filteredList]);

  return (
    <>
      {podcastList?.feed?.entry.length && (
        <FilterModule
          list={podcastList?.feed?.entry}
          setFiltered={handleFilteredList}
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
