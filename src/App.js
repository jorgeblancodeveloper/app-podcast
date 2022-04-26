import React from "react";
import { PodcastPage, MainPage, ErrorPage } from "./views/";
import Header from "./components/Header/Header";
import { Spinner } from "./elements/";

import { setPodcastList, setLoading } from "./services/redux/actions";
import { getDifferenceTime } from "./services/utils";
import { connect } from "react-redux";
import { getPodcastList } from "./services/api/getPodcastList";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./styles/app.scss";

const App = ({ setPodcastList, podcastList, isLoading, setLoading }) => {
  const fillPodcastList = async () => {
    const PodcastList = await getPodcastList();
    setPodcastList(PodcastList);
    localStorage.setItem(
      "myPodcastSession",
      JSON.stringify({ date: new Date(), podcastList: PodcastList })
    );
    setLoading(isLoading.filter((el) => el !== "App"));
  };

  React.useEffect(() => {
    const savedSession = JSON.parse(localStorage.getItem("myPodcastSession"));
    if (savedSession && getDifferenceTime(savedSession?.date) < 1) {
      setPodcastList(savedSession.podcastList);
    } else {
      setLoading([...isLoading, "App"]);
      fillPodcastList();
    }
  }, []);

  return podcastList ? (
    <div className="app">
      <BrowserRouter>
        <Header>Podcaster</Header>
        <Routes>
          <Route path="podcast/:id/*" element={<PodcastPage />} />
          <Route exact path="/" element={<MainPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route exact path="/*" element={<Navigate replace to="/" />}></Route>
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
})(App);
