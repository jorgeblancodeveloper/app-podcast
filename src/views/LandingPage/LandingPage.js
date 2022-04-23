import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import PodcastThumb from "../../components/PodcastThumb/PodcastThumb";
import { Input } from "../../elements/Input/Input";
import Header from "../../components/Header/Header";
const LandingPage = ({ podcastList, filteredList }) => {
  const index = 7;
  const thumbList =
    filteredList.length &&
    filteredList.map((e, i) => {
      const delay = i * 0.2;
      return (
        <PodcastThumb
          key={e.title.label + i}
          title={e.title.label}
          autor={e["im:artist"].label}
          image={e["im:image"][2].label}
          style={{ animationDelay: `${delay}s` }}
        />
      );
    });
  return (
    <div className="landing-page">
      <Header />
      <PodcasterCard
        title={podcastList?.feed?.entry[index].title.label}
        autor={podcastList?.feed?.entry[index]["im:artist"].label}
        description={podcastList?.feed?.entry[index].summary.label}
        image={podcastList?.feed?.entry[index]["im:image"][2].label}
      />
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
export default connect(mapStateToProps, {})(LandingPage);
