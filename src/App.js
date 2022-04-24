import React from "react";
import PodcastPage from "./views/PodcastPage/PodcastPage";
import Header from "./components/Header/Header";
import MainPage from "./views/MainPage/MainPage";
import { Spinner } from "./elements/Spinner/Spinner";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { setPodcastList } from "./services/redux/actions";
import { getDifferenceTime } from "./services/utils";
import { connect } from "react-redux";
import getPodcastList from "./services/api/getPodcastList";
import "./styles/app.scss";
const App = ({ setPodcastList, podcastList }) => {
  const fillPodcastList = async () => {
    const PodcastList = await getPodcastList();
    setPodcastList(PodcastList);
    localStorage.setItem(
      "myPodcastSession",
      JSON.stringify({ date: new Date(), podcastList: PodcastList })
    );
  };

  React.useEffect(() => {
    console.log("start");
    const savedSession = JSON.parse(localStorage.getItem("myPodcastSession"));
    if (savedSession && getDifferenceTime(savedSession?.date) > 0) {
      setPodcastList(savedSession.podcastList);
    } else {
      fillPodcastList();
    }
  }, []);

  return podcastList ? (
    <main>
      <div className="app">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="podcast/:id/*" element={<PodcastPage user={12} />} />
            <Route path="main" element={<MainPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
  };
};
export default connect(mapStateToProps, {
  setPodcastList,
})(App);
