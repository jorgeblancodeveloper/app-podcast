import React from "react";
 import LandingPage from "./views/LandingPage/LandingPage";

 import {updatePodcastLlist } from "./services/redux/actions";
 import { connect } from "react-redux";
import getPodcastList from "./services/api/getPodcastList";
 import "./styles/app.scss";
const App = ({updatePodcastLlist}) => {
  console.log("start");
  const handleGetPodcastList = async () => {
    const PodcastList = await getPodcastList();
    console.log(PodcastList);
    updatePodcastLlist(PodcastList)
  };

  React.useEffect(() => {
    handleGetPodcastList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="app">
        <LandingPage />
      </div>
    </main>
  );
};

// export default App;

const mapStateToProps = (state) => {
    return {
        podcastList: state.podcastList,
    };
  };
  export default connect(mapStateToProps, { updatePodcastLlist })(
    App
  );
  