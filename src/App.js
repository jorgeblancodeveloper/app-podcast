import React from "react";
import PodcastPage from "./views/PodcastPage/PodcastPage";
import EpisodePage from "./views/EpisodePage/EpisodePage";
import Header from "./components/Header/Header";
import MainPage from "./views/MainPage/MainPage";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import { setPodcastList, setFilteredList } from "./services/redux/actions";
import { connect } from "react-redux";
import getPodcastList from "./services/api/getPodcastList";
import "./styles/app.scss";
const App = ({ setPodcastList, setFilteredList, fullState, podcastList }) => {
  const getDifferenceTime = (data) => {
    const date1 = new Date();
    const date2 = new Date(data);
    const diffTime = Math.abs(date2 - date1);
    const diffMin = diffTime / (1000 * 60);
    // return diffTime / (1000 * 60 * 60 * 24);
    return diffMin;
  };

  React.useEffect(() => {
    const savedSession = JSON.parse(localStorage.getItem("myPodcastSession"));
    if (savedSession && getDifferenceTime(savedSession?.date) > 1) {
      setPodcastList(savedSession.podcastList);
      setFilteredList(savedSession.podcastList);
    } else {
      handleGetPodcastList();
    }
    return () => {};
  }, []);

  const handleGetPodcastList = async () => {
    const PodcastList = await getPodcastList();
    setPodcastList(PodcastList);
    setFilteredList(PodcastList);
    console.log(JSON.stringify(podcastList));
    localStorage.setItem(
      "myPodcastSession",
      JSON.stringify({ date: new Date(), podcastList: PodcastList })
    );
  };

  React.useEffect(() => {
    // handleGetPodcastList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("WW", fullState);
  return (
    <main>
      <div className="app">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="podcast/:id" element={<PodcastPage />}></Route>
            <Route path="podcast/*" element={<EpisodePage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
};

// export default App;

const mapStateToProps = (state) => {
  return {
    podcastList: state.podcastList,
    fullState: state,
  };
};
export default connect(mapStateToProps, {
  setPodcastList,
  setFilteredList,
})(App);
