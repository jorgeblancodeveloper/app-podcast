import React from "react";
import LandingPage from "./views/LandingPage/LandingPage";

import {
  updatePodcastList,
  updateFilteredList,
} from "./services/redux/actions";
import { connect } from "react-redux";
import getPodcastList from "./services/api/getPodcastList";
import "./styles/app.scss";
const App = ({ updatePodcastList, updateFilteredList }) => {
  const handleGetPodcastList = async () => {
    const PodcastList = await getPodcastList();
    updatePodcastList(PodcastList);
    updateFilteredList(PodcastList);
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
export default connect(mapStateToProps, {
  updatePodcastList,
  updateFilteredList,
})(App);
