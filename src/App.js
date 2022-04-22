import React from "react";
import getPodcastList from "./services/api/getPodcastList";
const App = () => {
  console.log("start");
  const handleGetPodcastList = async () => {
    const PodcastList = await getPodcastList();
    console.log(PodcastList);
  };

  React.useEffect(() => {
    handleGetPodcastList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>hello</h1>;
};

export default App;
