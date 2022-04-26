import React from "react";
import { connect } from "react-redux";
import {PodcastThumb, FilterModule} from "../../components";
import { getSelectedPodcast } from "../../services/utils";
import {
  setSelectedPodcast,
  setFilteredList,
  setEpisodeList,
} from "../../services/redux/actions";
import { useNavigate } from "react-router-dom";


const MainPage = ({
  podcastList,
  filteredList,
  setSelectedPodcast,
  setFilteredList,
  setEpisodeList,
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
    setEpisodeList([]);
  }, []);
  React.useEffect(() => {
    setThumbList(
      filteredList.length ? (
        filteredList.map((e, i) => {
          return (
            <PodcastThumb
              onClick={() => goPodcast(e.id.attributes["im:id"])}
              key={e.title.label + i}
              title={e["im:name"].label}
              autor={e["im:artist"].label}
              image={e["im:image"][2].label}
            />
          );
        })
      ) : (
        <div>No podcasts finded...</div>
      )
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
      <div className="podcast-list">
        <div className="podcast-list__wrapper">{thumbList}</div>
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
  setEpisodeList,
})(MainPage);
