import React from "react";
import { connect } from "react-redux";
import PodcasterCard from "../../components/PodcasterCard/PodcasterCard";
import PodcastThumb from "../../components/PodcastThumb/PodcastThumb";
const LandingPage = ({podcastList}) => {
  React.useEffect(() => {
  if (  podcastList) console.log("WW",podcastList?.feed?.entry[0]["im:image"][0])
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [podcastList]);
  const index=7;
  const thumbList= podcastList && podcastList?.feed?.entry.map(e=>{
   return <PodcastThumb 
    title={e.title.label}
    autor={e["im:artist"].label}
  
    image={e["im:image"][2].label}
   />
  })
 return (
  <div className="landing-page">
    {}
    {" "}
    <PodcasterCard 
     title={podcastList?.feed?.entry[index].title.label}
     autor={podcastList?.feed?.entry[index]["im:artist"].label}
     description={podcastList?.feed?.entry[index].summary.label}
     image={podcastList?.feed?.entry[index]["im:image"][2].label}
    />
    <div className="podcast-list">
        <PodcastThumb 
     title={podcastList?.feed?.entry[index].title.label}
     autor={podcastList?.feed?.entry[index]["im:artist"].label}

     image={podcastList?.feed?.entry[index]["im:image"][2].label}
    />
    {thumbList}
  </div>
  </div>
);
  }
const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {})(LandingPage);
// export default LandingPage;
