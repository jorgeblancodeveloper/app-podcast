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
const App = ({ setPodcastList, setFilteredList }) => {
  let { id } = useParams();
  const handleGetPodcastList = async () => {
    const PodcastList = await getPodcastList();
    setPodcastList(PodcastList);
    setFilteredList(PodcastList);
  };

  React.useEffect(() => {
    handleGetPodcastList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };
};
export default connect(mapStateToProps, {
  setPodcastList,
  setFilteredList,
})(App);
