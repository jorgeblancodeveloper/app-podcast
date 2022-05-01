import React from "react";
import { PodcastPage, MainPage, ErrorPage } from "./views/";
import { Header } from "./components";
import { Spinner } from "./elements/";

import {
  setPodcastList,
  setLoading,
  setEpisodeList,
} from "./services/redux/actions";
import {
  getDifferenceTime,
  logDebug,
  savePodcastListToLocal,
  saveEpisodeListToLocal,
  readEpisodeListFromLocal,
  readPodcastListFromLocal,
} from "./services/utils";
import { connect } from "react-redux";
import { getPodcastList } from "./services/api/getPodcastList";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./styles/app.scss";

const App = ({
  setPodcastList,
  podcastList,
  isLoading,
  setLoading,
  setEpisodeList,
}) => {
  const fillPodcastList = async () => {
    const rawPodcastList = await getPodcastList();
    const loadDate = new Date();
    setPodcastList({ date: loadDate, feed: rawPodcastList.feed });
    savePodcastListToLocal(
      JSON.stringify({ date: loadDate, feed: rawPodcastList.feed })
    );

    setLoading(isLoading.filter((el) => el !== "App"));
  };

  React.useEffect(() => {
    const localPodcastList = readPodcastListFromLocal();
    if (
      (localPodcastList && Object.keys(localPodcastList).length > 0) ||
      getDifferenceTime(localPodcastList?.date) < 1
    ) {
      logDebug("Read podcastList from local");
      setPodcastList(localPodcastList);
    } else {
      setLoading([...isLoading, "App"]);
      logDebug("Read podcastList from server");
      fillPodcastList();
    }

    setEpisodeList(readEpisodeListFromLocal());
  }, []);

  return podcastList ? (
    <div className="app">
      <BrowserRouter>
        <Header>Podcaster</Header>
        <Routes>
          <Route path="podcast/:id/*" element={<PodcastPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, {
  setPodcastList,
  setLoading,
  setEpisodeList,
})(App);
